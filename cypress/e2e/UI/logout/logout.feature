Feature: Log Out

  Scenario: User successfully logs out
    Given I am logged in
    When I log out
    Then I should be redirected to the login page

