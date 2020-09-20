Feature: Random User

  In order to keep random user api stable
  As a tester
  I want to make sure that everything works as expected

  Scenario: Get One Random User
    Given I make a "GET" request to "https:/randomuser.me/api"
     When I receive a response
     Then I expect response should have a status 200
  
  Scenario: Get One Random Male User
    Given I make a "GET" request to "https:/randomuser.me/api"
      And I set query param "gender" to "male"
     When I receive a response
     Then I expect response should have "valid male user details"