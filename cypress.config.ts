import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    video: false,
    viewportHeight: 915,
    viewportWidth: 412,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
