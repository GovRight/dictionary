var gulp = require('gulp');
var appRoot = require('app-root-path');
var fs = require('fs');
var po2json = require('po2json');
var async = require('async');
var glob = require('glob');
var runSequence = require('run-sequence');
var BPromise = require('bluebird');
var readFile = BPromise.promisify(fs.readFile);
var writeFile = BPromise.promisify(fs.writeFile);
var _ = require('lodash');

var cachedJSON = null;
function getJSON() {
  return new BPromise(function(resolve, reject) {
    if(cachedJSON) {
      return resolve(cachedJSON);
    }
    var poDir = appRoot + '/po/';
    glob(poDir + '*.po', {}, function(err, files) {
      if(err) {
        console.error(err);
        return reject('Can\'t load po files.');
      }

      var parseTasks = files.map(function(file) {
        return po2json.parseFile.bind(po2json, file, { format: 'mf' });
      });

      async.parallelLimit(parseTasks, 5, function(err, locales) {
        if(err) {
          console.error(err);
          return reject('Can\'t parse po files.');
        }

        var cachedJSON = {};
        locales.forEach(function(l) {
          cachedJSON[l['locale.code']] = l;
        });
        resolve(cachedJSON);
      });
    });
  });
}

gulp.task('ng', function() {
  return getJSON().then(function(terms) {
    return readFile(appRoot + '/templates/ng/govright-dictionary.js.tmpl', 'utf8').then(function(tmpl) {
      var data = tmpl.replace('<%= terms %>', JSON.stringify(terms));
      return writeFile(appRoot + '/dist/govright-dictionary.js', data);
    });
  }).catch(console.error);
});

gulp.task('md', function() {
  var index = {};
  return getJSON().then(function(terms) {
    return readFile(appRoot + '/templates/md/locale.md.tmpl', 'utf8').then(function(localeTmpl) {
      return BPromise.each(Object.keys(terms), function(l) {
        var localisedSlugs = getSlugs(terms, l);
        index[l] = {
          name: terms[l]['locale.name'],
          count: localisedSlugs.length
        };
        var localisedTerms = {};
        localisedSlugs.forEach(function(s) {
          localisedTerms[s] = {
            title: terms[l][s + '.title'],
            text: terms[l][s + '.text']
          };
        });
        var data = _.template(localeTmpl)({
          index: index[l],
          terms: localisedTerms
        });
        return writeFile(appRoot + '/terms/' + l + '.md', data);
      });
    });
  }).then(function() {
    return readFile(appRoot + '/templates/md/README.md.tmpl', 'utf8');
  }).then(function(indexTmpl) {
    return writeFile(appRoot + '/terms/README.md', _.template(indexTmpl)({locales: index}));
  }).catch(console.error);
});

gulp.task('default', function(done) {
  runSequence('ng', 'md', done);
});

function getSlugs(terms, locale) {
  // Return only existing terms if locale specified
  // If no locale passed - return full slug list
  var skipEmpty = !!locale;
  locale = locale || Object.keys(terms).shift();
  var slugs = [];

  _.each(terms[locale], function(v, slug) {
    if(slug.indexOf('locale.') === 0 || (skipEmpty && !v)) {
      return;
    }
    slug = slug.replace(/\.title$/, '').replace(/\.text$/, '');
    if(slugs.indexOf(slug) === -1) {
      slugs.push(slug);
    }
  });
  return slugs;
}
