import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import Header from "../../../page_objects/header.mjs";
import ProfilesPage from "../../../page_objects/profilesPage.mjs";
import CreateProfilePage from "../../../page_objects/createProfilePage.mjs";
import ProfilePage from "../../../page_objects/profilePage.mjs";
import newProfileData from "../../../fixtures/newProfileData.json";

Before(() => {
  cy.setupTestEnvironment();
  cy.loginUi();
});

Given("I navigate to the PROFILES section", () => {
  Header.profileSection.click();
});

When("I create a new profile with necessary details", () => {
  ProfilesPage.addProfileButton.click();
  ProfilesPage.profileType.contains(newProfileData.profileType).click();
  cy.wrap(CreateProfilePage.fillProfileForm()).as("profileData");
});

Then("the new profile should be successfully created", () => {
  Header.profileSection.click();
  cy.get("@profileData").then((profileData) => {
    const fullName = `${profileData.firstName} ${profileData.lastName}`;
    ProfilesPage.nameSearchInput.type(fullName);
    ProfilesPage.searchResult.contains(fullName).should("exist").and("be.visible").click();
    ProfilePage.userEmail.should("have.text", profileData.email);
  });
});
