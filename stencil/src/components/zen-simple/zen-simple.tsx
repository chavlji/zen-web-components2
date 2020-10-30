import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'zen-simple',
  styleUrl: 'zen-simple.css',
  shadow: true,
})
export class ZenSimple {

  @Prop() name: string;

  render() {
    return (
      <Host>
        <p>My name is {this.name}</p>
        <slot></slot>
      </Host>
    );
  }

}
