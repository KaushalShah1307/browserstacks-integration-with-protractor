var browserstack = require('browserstack-local');

exports.config = {
  'specs': [ '../specs/local.js' ],
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': 'kaushalshah3',
    'browserstack.key': 'aZuM2X6UL573W77rkbmJ',
    'build': 'protractor-browserstack',
    'name': 'local_test',
    'browserName': 'chrome',
    'browserstack.local': true,
    'browserstack.debug': 'true'
  },

  // Code to start browserstack local before start of test
  beforeLaunch: function(){
    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.capabilities['browserstack.key'] }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: function(){
    return new Promise(function(resolve, reject){
      exports.bs_local.stop(resolve);
    });
  }
};
