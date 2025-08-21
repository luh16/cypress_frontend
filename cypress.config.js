const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  e2e: {
    async setupNodeEvents(on, config) {
      // ✅ configura o preprocessor
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);

      // ✅ ativa cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // ✅ ativa allure
      allureWriter(on, config);

      return config;
    },

   env: {
  allure: true,
  allureReuseAfterSpec: true,
},
    

    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://qa-practice.netlify.app/",
    chromeWebSecurity: false,
  },
});

