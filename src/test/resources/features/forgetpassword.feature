@F1
Feature: To validate the forget password functionality in facebook


Scenario: To verify the forget password function
    Given User has to enter the facebook url
    When User has to click the forgetpassword link
    And User has to enter the mobno
    And user has to click the search button
    Then User has to navigate to the OTP page
