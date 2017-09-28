exports.config = {
  'specs': [ '../specs/single.js' ],
  //'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': 'kaushalshah3',
    'browserstack.key': 'aZuM2X6UL573W77rkbmJ',
    'build': 'protractor-browserstack',
    'name': 'single_test',
    'browserName': 'chrome',
    'resolution': '1024x768',
    'browserstack.debug': 'true'
  },
	multiCapabilities: {
		'browserName': 'chrome',
			logName: 'Desktop Chrome',
			chromeOptions: {
				args: [
					'start-maximized',
                    '--start-fullscreen'
                    //'incognito'
				],
      }
    }
  };
