var fs = require('fs');

module.exports = function(config) {

  // Browsers to run on Sauce Labs
  var customLaunchers = {
    /* 
    // this browser combo works on saucelabs
    sl_firefox_latest: {
      base: 'SauceLabs',
      platform: 'OS X 10.13',
      browserName: 'firefox',
      version: '58.0'
    }, 
    */
    sl_firefox_latest: {
      base: 'SauceLabs',
      platform: 'Windows 10',
      browserName: 'firefox',
      version: '58.0',
      // bug happens with and without this firefox profile, but it is a base64 encoded version of what is in test_profile/
      firefox_profile: 'UEsDBBQACAAIADB/V0wAAAAAAAAAAAAAAAAHAAAAdXNlci5qc3XLPQqAMAwG0N1TSCcFyQU8jET6VULtD0nq+d3cfPsbBj26Ii2hIApT5Ucu9qZkruBilDgjbLPrwLpP4z90aBEzaZWiGJ834vdeUEsHCH2BgiZKAAAAaAAAAFBLAQItAxQACAAIADB/V0x9gYImSgAAAGgAAAAHAAAAAAAAAAAAIACkgQAAAAB1c2VyLmpzUEsFBgAAAAABAAEANQAAAH8AAAAAAA==%'
    }, 
    /* 
    // running locally also works on windows and mac 
    firefox: {
      base: 'Firefox'
    } */
  };

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'src/*.js',
      'test/*.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],


    // web server port
    port: 9876,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    sauceLabs: {
      testName: 'Karma and Sauce Labs demo',
      username: '',
      accessKey: '',
    },
    captureTimeout: 120000,
    browserDisconnectTimeout : 60000,
    browserDisconnectTolerance : 1,
    browserNoActivityTimeout : 60000,
    customLaunchers: customLaunchers,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),
    singleRun: true
  });
};
