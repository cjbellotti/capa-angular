import { CapaEje4Page } from './app.po';

describe('capa-eje4 App', function() {
  let page: CapaEje4Page;

  beforeEach(() => {
    page = new CapaEje4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
