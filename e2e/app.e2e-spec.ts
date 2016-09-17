/// <reference path="../src/typings/index.d.ts" />

import { AngulatorsPage } from './app.po';
describe('angulators App', function() {
  let page: AngulatorsPage;

  beforeEach(() => {
    page = new AngulatorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
