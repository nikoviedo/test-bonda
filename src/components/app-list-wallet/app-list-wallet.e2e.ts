import { newE2EPage } from '@stencil/core/testing';

describe('app-list-wallet', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('app-list-wallet');
    expect(element).toHaveClass('hydrated');
  });

  it('renders the title', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('app-list-wallet >>> h1');
    expect(element.textContent).toEqual('Lista de Beneficios');
  });
});
