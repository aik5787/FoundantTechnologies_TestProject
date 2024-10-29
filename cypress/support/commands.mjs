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
    cy.clearCookies();
  });
