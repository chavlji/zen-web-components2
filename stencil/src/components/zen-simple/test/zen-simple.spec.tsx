import { newSpecPage } from '@stencil/core/testing';
import { ZenSimple } from '../zen-simple';

describe('zen-simple', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenSimple],
      html: `<zen-simple></zen-simple>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-simple>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-simple>
    `);
  });
});
