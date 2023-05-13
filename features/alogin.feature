Feature: Login Page

    As a user 
    I want to test
    All basic scenarios for login Page
    
    @logowanie
    @regres
    Scenario: Login with valid credentials
      Given I am on the login screen
      When I fill the '<login>' and '<password>' with valid credentials
      Then I should be able to see the home screen and tekst '<label>'

      Examples:
          | login | password | label            |
          | jk    | jk       | Znajdź pacjenta  |
  
    @logowanie
    @regres
    Scenario: Login with wrong login credentials
      Given I am on the login screen
      When I fill the '<login>' and '<password>' with wrong credentials
      Then I should be able to see error message

      Examples:
          | login | password  |
          | jk    | xxx       |
          | xxx   | jk        |
          | xxx   | xxx       |