Feature: Home Page

    As a log in user 
    I want to test
    home Page - to see list of wards for my login

    @homepage
    @regres
    Scenario: checkint main paga afetr login for proper list of wards
      Given I am on the home page screen after '<login>' and '<password>'
      When I should be able to see the home screen and tekst '<label>' dupa
      Then I see ward '<ward>'

      Examples:
          | login | password | label            | ward                                |
          | jk    | jk       | Znajdź pacjenta  | Oddział chirurgiczny ogólny (41846) |