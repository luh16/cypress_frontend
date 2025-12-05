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
  tags: "@teste", // Executar apenas os cenários com a tag 
  allure: true,
  allureReuseAfterSpec: true,
},
    

    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://hml5-login.smiles.com.br/authorize?client_id=GZx2w3Cm3GlhQZoKq26ZrmKZE61GB3RC&redirect_uri=https%3A%2F%2Fportal-uat5.smiles.com.br%2Flogincb%3Fdest%3D&audience=https://smiles.api&scope=openid%20profile%20email&response_type=code&prompt=login",
    chromeWebSecurity: false,
  },
});

