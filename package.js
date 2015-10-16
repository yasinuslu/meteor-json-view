Package.describe({
  name: 'yasinuslu:json-view',
  version: '1.2.2-1',
  // Brief, one-line summary of the package.
  summary: 'jQuery JSONView packaged for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/yasinuslu/meteor-json-view',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('ecmascript');
  api.use(['jquery', 'templating'], 'client');
  api.addFiles('jquery.jsonview.css', 'client');
  api.addFiles('jquery.jsonview.js', 'client');
  api.addFiles('json-view.html', 'client');
  api.addFiles('json-view.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yasinuslu:json-view');
  api.addFiles('json-view-tests.js');
});
