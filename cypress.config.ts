import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io", // change this to your app's base URL
    video: false, // set to true to record video of tests
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
