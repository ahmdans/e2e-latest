var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  filename: 'test-report.html',
  ignoreSkippedSpecs: true,
  captureOnlyFailedSpecs: true,
  reportOnlyFailedSpecs: false,
  showSummary: true,
  showQuickLinks: false,
  showConfiguration: true,
  reportFailedUrl: true,
  inlineImages: false,
});

exports.config = {

  onPrepare() {
    //////////////  Add Locator ///////////
    element(by.addLocator('formControlName', function (value, opt_parentElement) {
      const using = opt_parentElement || document;
      return using.querySelectorAll(`[formcontrolname=${value}]`);
    }));

    browser.driver.manage().window().maximize();
    global.EC = protractor.ExpectedConditions;
    // jasmine.getEnv().currentSpec.description;
    jasmine.getEnv().addReporter(reporter); // Assign the test reporter to each running instance

  },

  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    marionette: true,
    acceptInsecureCerts: true
  },

  // used Framework  
  framework: 'jasmine',
  useAllAngular2AppRoots: true,
  specs:
    [
      // '../Login/loginTestGAS.js',
      '../BasicData/addBasicDataTestGAS.js',
    ],
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000
  },
  // Setup the report before any tests start
  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
      process.on('uncaughtException', function () {
        reporter.jasmineDone();
        reporter.afterLaunch();
      });
    });
  },
  // Close the report after all tests finish
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
};



