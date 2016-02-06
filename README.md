# GovRight Corpus Dictionary 

List of legal terms in different languages. See the [full list of available terms](terms/index.md).

## Dictionary terms management

### General concept

Terms are stored in the [POEditor project](https://poeditor.com/projects/view?id=46174).
Here're some rules applied to each entry in the dictionary:

1. Each entry in the dictionary is represented by 2 strings - title and text.
2. Each entry must have a slug which can contain only lowercase letters, numbers and hyphen (-).
3. Entry title is represented by a term: `{slug}.title`. It is a word/phrase that should be highlighted.
4. Entry text is represented by a term: `{slug}.text`. It is the description text of the word/phrase.

### Adding new terms

For example, you want to add the `Legal process` phrase to the dict. Here're the steps:

1. Go to the terms management page of the Corpus Dictionary project in the poeditor https://poeditor.com/projects/view_terms?id=46174
2. Make up a slug for the work you want to add. For example, for `Legal process` it would be `legal-process`.
3. Click `Add Term` button in the bottom right.
4. Add `legal-process.title` and `legal-process.text` terms (replace `legal-process` with your slug).
    * `legal-process.title` is the word that should be highlighted, `Legal process` in this particular case
    * `legal-process.text` is the text that describes the phrase
5. Go back to the project home page https://poeditor.com/projects/view?id=46174
6. Go to a specific language and add translations for the newly added term.
7. Make a request to the admins to update the site.
8. In the corpus txt file, use the `+++terms:` tag to add terms to an article. It must contain only term slug. 
It can be a coma-separated list of slugs. For example:

```
---article-123
Example article text
+++terms: legal-process, something-else
---/article-123
```

## Usage

Add `govright.dictionary` module as a dependency to your main application module. Example:

```html
<!doctype html>
<html ng-app="myApp">
 <head>
   <script src="js/angular.js"></script>
   <!-- Include the dictionary script -->
   <script src="dist/govright-dictionary.js"></script>
   <script>
     // ...and add 'govright.dictionary' as a dependency
     var myApp = angular.module('myApp', ['govright.dictionary'])
       // Then, inject GovrightDictionary into your controller/service
       .controller('myController', function(GovrightDictionary) {
         // It's just a big json, access terms title/text like this
         console.log(GovrightDictionary.en['legal-process.title']);
       });
   </script>
 </head>
 <body></body>
</html>
```

## Development
 
### Updating terms

1. Download po files from the POEditor.
2. Put them into `po` folder.
3. Run `gulp`.
4. Check `dist` folder for updated assets.

### CLI commands

```bash
# Rebuild angular service
gulp ng

# Rebuild markdown docs
gulp md

# Rebuild everything
gulp
```
