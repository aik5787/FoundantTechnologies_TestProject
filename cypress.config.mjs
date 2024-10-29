import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import dotenv from "dotenv";

dotenv.config();

export async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  config.env.USERNAME = process.env.USERNAME;
  config.env.PASSWORD = process.env.PASSWORD;

  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://app.foundant.io",
    viewportWidth: 1280,
    viewportHeight: 720,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 60000,
    specPattern: "**/*.feature",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true,
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/reports/screenshots",
    setupNodeEvents,
  },
});
