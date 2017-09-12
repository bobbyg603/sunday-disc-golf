import { SundaydiscgolfPage } from './app.po';
import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

describe('sundaydiscgolf App', () => {
  let page: SundaydiscgolfPage;

  beforeEach(() => {
    page = new SundaydiscgolfPage();
  });

  it('should display the navbar', () => {
    page.navigateTo();
    page.login();
    const navbar = element(By.className("navbar"));
    const playersLink = navbar.element(By.linkText("Players"));
    const coursesLink = navbar.element(By.linkText("Courses"));
    expect(navbar.getText()).toContain('Sunday Disc Golf');
    expect(playersLink.isDisplayed()).toBe(true);
    expect(coursesLink.isDisplayed()).toBe(true);
  });

  it('should navigate to the players page', () => {
    page.navigateTo();
    page.login();
    element(By.linkText("Players")).click();
    expect(element(By.css("h1")).getText()).toContain("Players");
  });

  it('should navigate to the courses page', () => {
    page.navigateTo();
    page.login();
    element(By.linkText("Courses")).click();
    expect(element(By.css("h1")).getText()).toContain("Courses");
  });

  it('should navigate to the scores page', () => {
    page.navigateTo();
    page.login();
    element(By.linkText("Scores")).click();
    expect(element(By.css("h1")).getText()).toContain("Scores");
  });

  it('should navigate to the leaderboard page', () => {
    page.navigateTo();
    page.login();
    element(By.linkText("Leaderboard")).click();
    expect(element(By.css("h1")).getText()).toContain("Leaderboard");
  })
});
