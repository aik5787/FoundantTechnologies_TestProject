import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../page_objects/loginPage.mjs";
import UserSitesPage from "../../../page_objects/userSitesPage.mjs";
import verificationData from "../../../fixtures/verificationData.json";

Before(() => {
  cy.setupTestEnvironment();
});

Given("I navigate to the Foundant application", () => {
  cy.visit("/");
});

When("I log in with valid credentials", () => {
  LoginPage.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
});

When("I open the BETA site", () => {
  UserSitesPage.betaSite.click();
});

Then("I should see the BETA site successfully loaded", () => {
  cy.url().should("include", verificationData.betaSiteUrl);
  cy.contains(verificationData.betaSiteTitle).should("exist");
});
