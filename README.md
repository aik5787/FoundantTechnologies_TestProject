Cypress Tests

This repository contains end-to-end tests for the Foundant application using Cypress and the Cucumber preprocessor. The tests are organized by features and scenarios, ensuring a clear and structured approach to testing.

Table of Contents
Features
Setup
Prerequisites
Installation
Environment Variables
Running Tests
Locally
Specific Tests
GitHub Actions
Triggering the Workflow
Contributing
License

Features

Login
Scenario: Login with valid credentials
Given: I navigate to the Foundant application
When: I log in with valid credentials
And: I open the BETA site
Then: I should see the BETA site successfully loaded

Create Profile
Scenario: Successfully create a new profile
Given I navigate to the PROFILES section
When I create a new profile with necessary details
Then the new profile should be successfully created

Manage Profile Notes
Scenario: Successfully add a note to the profile
Given: I navigate to the user profile
When: I add a note to the profile
Then: The new note should be successfully created

Manage Profile Tasks
Scenario: Successfully add a task to the profile
Given: I navigate to the user profile
When: I add a task to the profile
Then: The new task should be successfully created

Log Out
Scenario: User successfully logs out
Given: I am logged in
When: I log out
Then: I should be redirected to the login page

Setup

Prerequisites

Node.js (version 20 or above)

Installation

Clone this repository: git clone git@github.com:aik5787/

FoundantTechnologies_TestProject.git
Navigate to the project directory:

cd FoundantTechnologies_TestProject

Install the dependencies:

npm install

Environment Variables

Make sure to set the following environment variables in your .env file or in your CI/CD environment:

USERNAME=your_username
PASSWORD=your_password

Running Tests

Locally

To run the tests locally using the Cypress GUI:

npx cypress open

To run the tests in headless mode:

npx cypress run

Specific Tests

To run tests in parallel and create a mochawesome report:

npm run test:full

GitHub Actions

This repository is configured to run tests automatically on pull requests using GitHub Actions. The workflow file is located in .github/workflows/cypress-tests.yml.

Triggering the Workflow
The workflow is triggered on:

Pull requests (opened, reopened, edited, synchronized)
Manually via workflow_dispatch

Contributing

Contributions are welcome! Please create an issue or submit a pull request.

Fork the repository.
Create a new branch.
Make your changes.
Commit your changes.
Push to the branch.
Create a pull request.

License

This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to copy and paste the above Markdown text into your README file!

