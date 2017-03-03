import { HyboClientPage } from './app.po';

describe('hybo-client App', () => {
  let page: HyboClientPage;

  beforeEach(() => {
    page = new HyboClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
