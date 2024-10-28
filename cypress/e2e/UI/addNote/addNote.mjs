import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import ProfilePage from "../../../page_objects/profilePage.mjs";
import NewNotePage from "../../../page_objects/newNotePage.mjs";
import AllNotesPage from "../../../page_objects/allNotesPage.mjs";
import newNoteData from "../../../fixtures/newNoteData.json";
import urls from "../../../fixtures/urls.json";

Before(() => {
  cy.setupTestEnvironment();
  cy.loginUi();
});

Given("I navigate to the user profile", () => {
  cy.visit(urls.userProfileUrl);
});

When("I add a note to the profile", () => {
  ProfilePage.addNoteButton.click();
  NewNotePage.addNewNote(newNoteData);
});

Then("the new note should be successfully created", () => {
  ProfilePage.allNotes.click();
  cy.contains(newNoteData.noteLabel).click();
  AllNotesPage.selectedNote.should("have.text", newNoteData.noteDetails);
});

After(() => {
  AllNotesPage.deleteNote(newNoteData);
});
