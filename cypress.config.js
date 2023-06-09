const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    retries: 2,
    specPattern: "**/*.feature",
    baseUrl: "https://telnyx.com/",
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
      };
      on('file:preprocessor', cucumber(options));
      allureWriter(on, config);
      return config;
    },
    env: {
        allureReuseAfterSpec: true
    }
  },
});
