package org.stepdefinition;

import java.util.Map;

import org.base.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;

import org.openqa.selenium.WebElement;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginPageSteps extends BaseClass{

	@Given("User has to launch chrome and hit the Facebook url")
	public void user_has_to_launch_chrome_and_hit_the_Facebook_url() {
		driver.get("https://www.facebook.com/");
	}

	@When("User has to enter the Username and Password")
	public void user_has_to_enter_the_Username_and_Password(io.cucumber.datatable.DataTable dataTable) {
		Map<String, String> asMap = dataTable.asMap(String.class, String.class);
		driver.findElement(By.id("email")).sendKeys(asMap.get("username"));
		driver.findElement(By.id("pass")).sendKeys(asMap.get("password"));
	}

	@When("User has to enter the {string} and {string}")
	public void user_has_to_enter_the_and(String string, String string2) {

		WebElement user = driver.findElement(By.id("email"));
		user.sendKeys(string);

		WebElement password = driver.findElement(By.id("pass"));
		password.sendKeys(string2);
	}

	@When("Click the Login functionality")
	public void click_the_Login_functionality() {
		WebElement click = driver.findElement(By.xpath("//button[text()='Log In']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", click);

	}

	@Then("User unable to enter the home page")
	public void user_unable_to_enter_the_home_page() {
		System.out.println("user unable to login the facebook");
	}

	@Given("User has to launch Chrome and hit the fb url")
	public void user_has_to_launch_Chrome_and_hit_the_fb_url() {
		driver.get("https://www.facebook.com/");
	}

	@When("user has to enter the {string} and {string}")
	public void user_has_to_enter_the_and1(String emailid, String password) {
		WebElement email = driver.findElement(By.id("email"));
		email.sendKeys(emailid);

		WebElement pass = driver.findElement(By.id("pass"));
		pass.sendKeys(password);
	}

	@When("user has to click login button")
	public void user_has_to_click_login_button() {
		WebElement click = driver.findElement(By.xpath("//button[text()='Log In']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", click);
	}

	@Then("user able to enter the home page")
	public void user_able_to_enter_the_home_page() {
		System.out.println("user unable to enter into homr page");
	}
}
