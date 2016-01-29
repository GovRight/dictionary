var gulp = require('gulp');
var appRoot = require('app-root-path');
var fs = require('fs');
var po2json = require('po2json');
var async = require('async');
var glob = require('glob');

gulp.task('build', function(done) {
  var poDir = appRoot + '/po/';

  glob(poDir + '*.po', {}, function(err, files) {
    if(err) throw new Error('Can\'t load po files.');

    var parseTasks = files.map(function(file) {
      return po2json.parseFile.bind(po2json, file, { format: 'mf' });
    });

    async.parallelLimit(parseTasks, 5, function(err, locales) {
      if(err) return done(err);

      var dictionary = {};
      locales.forEach(function(l) {
        dictionary[l['locale.code']] = l;
        delete l['locale.code'];
      });

      fs.readFile(appRoot + '/templates/govright-dictionary.js.tmpl', 'utf8', function(err, tmpl) {
        if(err) return done(err);
        var data = tmpl.replace('<%= terms %>', JSON.stringify(dictionary));
        fs.writeFile(appRoot + '/dist/govright-dictionary.js', data, function(err) {
          if(err) return done(err);
          done();
        })
      });
    });
  });
});

gulp.task('default', ['build']);
