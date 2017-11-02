import { CapaEje1Page } from './app.po';

describe('capa-eje1 App', function() {
  let page: CapaEje1Page;

  beforeEach(() => {
    page = new CapaEje1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
