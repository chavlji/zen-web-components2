import { newE2EPage } from '@stencil/core/testing';

describe('zen-simple', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<zen-simple></zen-simple>');

    const element = await page.find('zen-simple');
    expect(element).toHaveClass('hydrated');
  });
});
