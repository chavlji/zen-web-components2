import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-dropdown-simple',
  styleUrl: 'zen-dropdown-simple.css',
  shadow: true,
})
export class ZenDropdownSimple {

  render() {
    return (
      <Host>
        <p>Dropdown</p>
        <slot></slot>
      </Host>
    );
  }

}
