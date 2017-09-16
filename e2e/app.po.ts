import { browser, by, element, ExpectedConditions } from 'protractor';

export class SundayDiscGolfPage {

  navbar = element(by.className("navbar"));
  navbarToggleButton = element(by.id("navbar-toggle-button"));
  loginLink = element(by.linkText("Login"));
  logoutLink = element(by.linkText("Logout"));
  usernameInput = element(by.id("usernameInput"));
  passwordInput = element(by.id("passwordInput"));
  signInButton = element(by.buttonText("Sign in"));

  navigateTo() {
    return browser.get('/');
  }

  login(username = "bobbyg603", password = "Fe7T4DcAamqz") {
    this.loginLink.click();
    browser.wait(ExpectedConditions.visibilityOf(this.usernameInput));
    this.usernameInput.sendKeys(username);
    this.passwordInput.sendKeys(password);
    this.signInButton.click();
  }

  logout() {
    this.logoutLink.click();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
