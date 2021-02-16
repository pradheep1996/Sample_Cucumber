$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "To validate the login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@EndtoEndTesting"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to launch chrome and hit the Facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_has_to_launch_chrome_and_hit_the_Facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User unable to enter the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_unable_to_enter_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify login functionality with valid username and Invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@EndtoEndTesting"
    }
  ]
});
formatter.step({
  "name": "User has to enter the Username and Password",
  "rows": [
    {
      "cells": [
        "username",
        "pradheep"
      ]
    },
    {
      "cells": [
        "password",
        "pradh@123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_has_to_enter_the_Username_and_Password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login functionality",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.click_the_Login_functionality()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify the login functionality with valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has to enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user has to click login button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "pradheep",
        "pradheep@123"
      ]
    },
    {
      "cells": [
        "udesh",
        "Udesh@7343"
      ]
    },
    {
      "cells": [
        "9566001775",
        "murali777"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to launch chrome and hit the Facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_has_to_launch_chrome_and_hit_the_Facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User unable to enter the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_unable_to_enter_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the login functionality with valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EndtoEndTesting"
    }
  ]
});
formatter.step({
  "name": "user has to enter the \"pradheep\" and \"pradheep@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_has_to_enter_the_and1(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to launch chrome and hit the Facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_has_to_launch_chrome_and_hit_the_Facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User unable to enter the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_unable_to_enter_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the login functionality with valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EndtoEndTesting"
    }
  ]
});
formatter.step({
  "name": "user has to enter the \"udesh\" and \"Udesh@7343\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_has_to_enter_the_and1(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to launch chrome and hit the Facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_has_to_launch_chrome_and_hit_the_Facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User unable to enter the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_unable_to_enter_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the login functionality with valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EndtoEndTesting"
    }
  ]
});
formatter.step({
  "name": "user has to enter the \"9566001775\" and \"murali777\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSteps.user_has_to_enter_the_and1(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});