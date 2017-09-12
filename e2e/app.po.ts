import { browser, by, element } from 'protractor';

export class SundaydiscgolfPage {
  
  navigateTo() {
    return browser.get('/');
  }

  login() {
    element(by.buttonText("Login")).click();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
