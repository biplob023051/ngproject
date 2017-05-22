import { WeblancerPage } from './app.po';

describe('weblancer App', () => {
  let page: WeblancerPage;

  beforeEach(() => {
    page = new WeblancerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
