const { Given, When , Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
const { HomePage } = require('../page-objects/homePage');
const { LoginPage } = require('../page-objects/login-page');

const loginPage = new LoginPage();
//const homePage = new HomePage();

Given('I am on the home page screen after {string} and {string}', async function(string, string2) {
    await loginPage.navigateToLoginScreen();
    await loginPage.verifyLoginPageIsDisplayed();

    await loginPage.submitLoginForm(string, string2);
  });

When('I should be able to see the home screen and tekst {string} dupa', async function(string) {
   
    await loginPage.verifyAfterLoginPage(string);

  });

  Then('I see ward {string}', async function(string) {
    await new HomePage().checkWard(string);
  });
  