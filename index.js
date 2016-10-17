var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
  databaseURI: '',
  cloud: __dirname + '/cloud/main.js', // Absolute path to your Cloud Code
  appId: 'myAppId',
  masterKey: 'myMasterKey', // Keep this key secret!
  fileKey: 'optionalFileKey',
  serverURL: '', // Don't forget to change to https if needed
  //push: {
  //  ios: {
  //    pfx: 'file.p12',
  //    bundleId: 'com.product',
  //    production: true
  //  }
  //}
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(80, function() {
  console.log('parse-server-example running on port 80.');
});