package org.stepdefinition;

import org.base.BaseClass;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HookClass extends BaseClass{
	@Before
	public void beforeExecution() {
		launchBrowser();
		driver.manage().window().maximize();
    }
	
	@After
	public void afterExecution() {
		driver.quit();
    }
}
