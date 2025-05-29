const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://review-4158.review.workerbase.dev/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
