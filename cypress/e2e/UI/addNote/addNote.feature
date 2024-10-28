Feature: Manage Profile Notes

  Scenario: Successfully add a note to the profile
    Given I navigate to the user profile
    When I add a note to the profile
    Then the new note should be successfully created

