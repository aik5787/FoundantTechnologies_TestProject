import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import Header from "../../../page_objects/header.mjs";
import verificationData from "../../../fixtures/verificationData.json";

Before(() => {
  cy.setupTestEnvironment();
});

Given("I am logged in", () => {
    cy.loginUi();
});

When("I log out", () => {
  Header.profileIcon.click();
  Header.logoutButton.contains(verificationData.logoutButtonText).click();
});

Then("I should be redirected to the login page", () => {
  cy.contains(verificationData.loginPageTex).should("exist");
});
