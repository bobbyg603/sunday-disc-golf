import { SundayDiscGolfPage } from './app.po';
import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

describe('sundaydiscgolf App', () => {
  let page: SundayDiscGolfPage;

  beforeEach(() => {
    page = new SundayDiscGolfPage();
    page.navigateTo();
    page.login();
  });

  afterEach(() => {
    page.logout();
  })

  it('should display the navbar', () => {
    const links = [];
    links.push(page.navbar.element(By.linkText("Home")));
    links.push(page.navbar.element(By.linkText("Players")));
    links.push(page.navbar.element(By.linkText("Courses")));
    links.push(page.navbar.element(By.linkText("Scores")));
    links.push(page.navbar.element(By.linkText("Leaderboard")));
    links.push(page.navbar.element(By.linkText("Logout")));
    expect(page.navbar.getText()).toContain('Sunday Disc Golf');
    links.forEach(link => {
      expect(link.isDisplayed()).toBe(true);
    })
  });

  it('should navigate to the players page', () => {
    element(By.linkText("Players")).click();
    expect(element(By.css("h1")).getText()).toContain("Players");
  });

  it('should navigate to the courses page', () => {
    element(By.linkText("Courses")).click();
    expect(element(By.css("h1")).getText()).toContain("Courses");
  });

  it('should navigate to the scores page', () => {
    element(By.linkText("Scores")).click();
    expect(element(By.css("h1")).getText()).toContain("Scores");
  });

  it('should navigate to the leaderboard page', () => {
    element(By.linkText("Leaderboard")).click();
    expect(element(By.css("h1")).getText()).toContain("Leaderboard");
  })
});
