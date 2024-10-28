import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";
import ProfilePage from "../../../page_objects/profilePage.mjs";
import Header from "../../../page_objects/header.mjs";
import NewTaskPage from "../../../page_objects/newTaskPage.mjs";
import AllTasksPage from "../../../page_objects/allTasksPage.mjs";
import newTaskData from "../../../fixtures/newTaskData.json";
import urls from "../../../fixtures/urls.json";

Before(() => {
  cy.setupTestEnvironment();
  cy.loginUi();
});

Given("I navigate to the user profile", () => {
  cy.visit(urls.userProfileUrl);
});

When("I add a task to the profile", () => {
  ProfilePage.addTaskButton.click();
  NewTaskPage.addNewTask(newTaskData);
});

Then("the new task should be successfully created", () => {
  Header.tasksSection.click();
  cy.contains(newTaskData.taskLabel).click();
  AllTasksPage.selectedTask.should("have.text", newTaskData.taskDetails);
});

After(() => {
  AllTasksPage.deleteTask(newTaskData.taskLabel);
});
