@Regres
Feature: Regres

  In order to keep Regres api stable
  As a tester
  I want to make sure that everything works as expected

  Scenario: Get A User
    Given I make a "GET" request to "/api/users/1"
     When I receive a response
     Then I expect response should have a status 200
      And I expect response should have a json like
      """
      {
        "data": {
          "id": 1,
          "first_name": "George"
        }
      }
      """

  Scenario: List Users
    Given I make a "GET" request to "/api/users"
      And I set query param "page" to "2"
     When I receive a response
     Then I expect response should have a status 200
      And I expect response should have a json like
      """
      {
        "page": 2
      }
      """
      And I expect response should have a json schema
      """
      {
        "type": "object",
        "properties": {
          "page": {
            "type": "number"
          }
        }
      }
      """

  Scenario: Create A User
    Given I make a "POST" request to "/api/users"
      And I set body to
      """
      {
        "name": "morpheus",
        "job": "leader"
      }
      """
     When I receive a response
     Then I expect response should have a status 201