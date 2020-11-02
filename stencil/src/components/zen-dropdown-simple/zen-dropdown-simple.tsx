import { Component, Host, h, Prop, State } from '@stencil/core';

export interface OptionItem {
  label: string
}

@Component({
  tag: 'zen-dropdown-simple',
  styleUrl: 'zen-dropdown-simple.css',
  shadow: true,
})

export class ZenDropdownSimple {

  @State() opened: boolean = false;

  @Prop() value: string = 'Initial value';
  @Prop() options: Array<OptionItem> = [{label: 'jan'}, {label: 'ban'}];

  render() {
    return (
      <Host>
        <div class="input" onClick={() => {this.opened = !this.opened}}>Select me</div>
        {this.opened
          ? <div>
            { this.options.map((option) =>
              <div>
                <p>{option.label}</p>
              </div>
            )}
          </div>
          : <p>Closed</p>
        }
        <slot></slot>
      </Host>
    );
  }

}
