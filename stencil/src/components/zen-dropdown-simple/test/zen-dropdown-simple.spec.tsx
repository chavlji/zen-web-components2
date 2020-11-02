import { newSpecPage } from '@stencil/core/testing';
import { ZenDropdownSimple } from '../zen-dropdown-simple';

describe('zen-dropdown-simple', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenDropdownSimple],
      html: `<zen-dropdown-simple></zen-dropdown-simple>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-dropdown-simple>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-dropdown-simple>
    `);
  });
});
