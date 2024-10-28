Feature: Manage Profile Tasks

  Scenario: Successfully add a task to the profile
    Given I navigate to the user profile
    When I add a task to the profile
    Then the new task should be successfully created
