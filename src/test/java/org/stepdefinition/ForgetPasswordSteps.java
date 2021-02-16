package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class ForgetPasswordSteps {
	
	public static WebDriver d;
	
	@Given("User has to enter the facebook url")
	public void user_has_to_enter_the_facebook_url() {
		 WebDriverManager.chromedriver().setup();
		    d = new ChromeDriver();
		    d.get("https://www.facebook.com/");
	}

	@When("User has to click the forgetpassword link")
	public void user_has_to_click_the_forgetpassword_link() {
	    WebElement forgetpasslink = d.findElement(By.xpath("//a[text()='Forgotten password?']"));
	    forgetpasslink.click();
	}

	@When("User has to enter the mobno")
	public void user_has_to_enter_the_mobno() {
	   WebElement txtMobno = d.findElement(By.id("identify_email"));
	   txtMobno.sendKeys("8778324021");
	}

	@When("user has to click the search button")
	public void user_has_to_click_the_search_button() {
	    d.findElement(By.xpath("//button[@id='did_submit']")).click();
	}

	@Then("User has to navigate to the OTP page")
	public void user_has_to_navigate_to_the_OTP_page() {
		System.out.println("user unable to move to OTP page");
	}
}

