import { NgUtilitiesPage } from './app.po';

describe('ng-utilities App', () => {
  let page: NgUtilitiesPage;

  beforeEach(() => {
    page = new NgUtilitiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
