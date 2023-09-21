const { defineConfig } = require("cypress");

module.exports = defineConfig({
  ///Podemos configurar o tempo de espera tanto global quanto num teste especifico.
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://rahulshettyacademy.com/seleniumPractise/#/'
  },
});
