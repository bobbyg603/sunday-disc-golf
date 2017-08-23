import { SundaydiscgolfPage } from './app.po';

describe('sundaydiscgolf App', () => {
  let page: SundaydiscgolfPage;

  beforeEach(() => {
    page = new SundaydiscgolfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Sunday Disc Golf');
  });
});
