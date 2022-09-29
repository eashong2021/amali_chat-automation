const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  browser: 'electron',
  pageLoadTimeout: 20000,
  defaultCommandTimeout: 10000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome, mocha-junit-reporter',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/ci-reports/',
      overwrite: true,
      html: false,
      json: false,
      consoleReporter: 'spec',
      timestamp: 'mmddyyyy_HHMMss',
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/ci-reports/result[hash].xml',
      timestamp: 'mmddyyyy_HHMMss',
      toConsole: false,
      includePending: true,
    },
  },
  video: false,
  headless: true,
  env: {
    'mode-run': true,
  },
  retries: 2,
  scrollBehavior: 'center',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: ['manual.*', 'captures-*'],
    specPattern: 'cypress/e2e/tests/**/*.cy.js',
  },
})
