Feature: Login

  Scenario: Login with valid credentials
    Given I navigate to the Foundant application
    When I log in with valid credentials
    And I open the BETA site
    Then I should see the BETA site successfully loaded