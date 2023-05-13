const { Given, When , Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
const { LoginPage } = require('../page-objects/login-page');
const loginPage = new LoginPage();

Given('I am on the login screen', async function() {
  await loginPage.navigateToLoginScreen();
  await loginPage.verifyLoginPageIsDisplayed();
});

When('I fill the {string} and {string} with valid credentials', async function(string, string2) {
  await loginPage.submitLoginForm(string, string2);
});

Then('I should be able to see the home screen and tekst {string}', async function(string) {
  //const wynik = await loginPage.verifyAfterLoginPage();
  await loginPage.verifyAfterLoginPage(string);
  //await loginPage.verifyNazwaOddzalu();
 // await loginPage.testy();
});

When('I fill the {string} and {string} with wrong credentials', async function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.submitLoginForm(string, string2);
});

Then('I should be able to see error message', async function() {
  await loginPage.verifiyAfterWrongLogin();
});

