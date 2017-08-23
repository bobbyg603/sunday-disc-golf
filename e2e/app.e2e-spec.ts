import { SundaydiscgolfPage } from './app.po';
import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

describe('sundaydiscgolf App', () => {
  let page: SundaydiscgolfPage;

  beforeEach(() => {
    page = new SundaydiscgolfPage();
  });

  it('should display the navbar', () => {
    page.navigateTo();
    const navbar = element(By.className("navbar"));
    const playersLink = navbar.element(By.linkText("Players"));
    const coursesLink = navbar.element(By.linkText("Courses"));
    expect(navbar.getText()).toContain('Sunday Disc Golf');
    expect(playersLink.isDisplayed()).toBe(true);
    expect(coursesLink.isDisplayed()).toBe(true);
  });

  it('should navigate to the players page', () => {
    page.navigateTo();
    element(By.linkText("Players")).click();
    expect(page.getParagraphText()).toContain("Players");
  });

  it('should navigate to the courses page', () => {
    page.navigateTo();
    element(By.linkText("Courses")).click();
    expect(page.getParagraphText()).toContain("Courses");
  });
});
