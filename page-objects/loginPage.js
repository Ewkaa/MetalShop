const { default: test } = require("@playwright/test");
const { expect } = require("chai");

 locators = {
   "username_input": "input[name = 'userName']",
   "password_input": "input[name = 'password']",
   "login_button": "button[type = 'submit']",
   "inventory_container": 'text = Znajdź pacjenta',
   "error_message_login": 'text = Błąd logowania!',
   "nazwa_oddzalu": 'data-testid=dashboard.wards.card.title'
 }

  testLabels = {
    "ordynator": 'dashboard.wards.card.Ordynator',
    "nazwa_oddzialu": 'dashboard.wards.card.title',
    "liczbaLozek": 'dashboard.wards.card.Liczba łóżek'
  }

 class LoginPage {

  async navigateToLoginScreen() {
   return await page.goto(global.BASE_URL);
  }

  async verifyLoginPageIsDisplayed() {
   return expect(await page.title()).to.equal('mObchod');
  }

  async submitLoginForm(string, string2) {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input,string);
    await page.fill(locators.password_input,string2);
    await page.click(locators.login_button);
  }

  async verifyAfterLoginPage(string) {
    const element = await page.waitForSelector(locators.inventory_container);
    const wynik = await page.isVisible(locators.inventory_container);
    // console.log("Parametr " + string);
    // console.log("jest napis " + " " + locators.inventory_container + " " + wynik);
    // console.log("test " + await page.locator(locators.inventory_container).textContent());
    return expect(await page.locator(locators.inventory_container).textContent()).to.equal(string);
  }

  async verifyNazwaOddzalu() {
    console.log("Szukam " + locators.nazwa_oddzalu);
    const element = await page.waitForSelector(locators.nazwa_oddzalu);

    const oddzialy = await page.getByTestId(testLabels.nazwa_oddzialu);
    const ordynatorzy = await page.getByTestId(testLabels.ordynator);
    const liczbaLozek = await page.getByTestId(testLabels.liczbaLozek);

    for (const li of await oddzialy.all())
      console.log(await li.textContent());
  
    for (const li of await ordynatorzy.all())
      console.log(await li.textContent());

    for (const li of await liczbaLozek.all())
      console.log(await li.textContent());

    return expect(await liczbaLozek.count()).to.equal(3);
  }

  async verifiyAfterWrongLogin() {
    const element = await page.waitForSelector(locators.error_message_login);
    const wynik = await page.isVisible(locators.error_message_login);
    console.log("jest napis " + " " + locators.error_message_login + " " + wynik);
    return expect(wynik).to.equal(true);
  }

}

module.exports = { LoginPage };