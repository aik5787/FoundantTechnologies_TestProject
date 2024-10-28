// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from "../page_objects/loginPage.mjs";
import UserSitesPage from "../page_objects/userSitesPage.mjs";

Cypress.Commands.add("errorHandler", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  Cypress.Commands.add("loginUi", () => {
    cy.visit("/");
    LoginPage.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
    UserSitesPage.betaSite.click(); 
  });

  Cypress.Commands.add("setupTestEnvironment", () => {
    cy.errorHandler();
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
