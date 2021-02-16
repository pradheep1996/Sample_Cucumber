@EndtoEndTesting
Feature: To validate the login functionality

  Background: 
    Given User has to launch chrome and hit the Facebook url
    Then User unable to enter the home page

  
  Scenario: To verify login functionality with valid username and Invalid password
    When User has to enter the Username and Password
      | username | pradheep  |
      | password | pradh@123 |
    And Click the Login functionality

 
  Scenario Outline: To verify the login functionality with valid username and valid password
    When user has to enter the "<username>" and "<password>"
    And user has to click login button

    Examples: 
      | username   | password     |
      | pradheep   | pradheep@123 |
      | udesh      | Udesh@7343   |
      | 9566001775 | murali777    |
