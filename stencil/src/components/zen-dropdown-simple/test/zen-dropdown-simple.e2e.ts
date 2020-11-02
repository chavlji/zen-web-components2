import { newE2EPage } from '@stencil/core/testing';

describe('zen-dropdown-simple', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<zen-dropdown-simple></zen-dropdown-simple>');

    const element = await page.find('zen-dropdown-simple');
    expect(element).toHaveClass('hydrated');
  });
});
