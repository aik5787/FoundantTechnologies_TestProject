Feature: Create Profile

  Scenario: Successfully create a new profile
    Given I navigate to the PROFILES section
    When I create a new profile with necessary details
    Then the new profile should be successfully created
