import { Component, Host, h, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';
import { isChildOf } from './functions';

export interface OptionItem {
  label: string
}

@Component({
  tag: 'zen-dropdown-simple',
  styleUrl: 'zen-dropdown-simple.scss',
  shadow: false,
})

export class ZenDropdownSimple {

  div: HTMLElement = undefined;
  clickHandler = undefined;

  @State() opened: boolean = false;

  @Prop() val: OptionItem = { label: '' };
  @Prop() options: Array<OptionItem> = [];
  @Prop() trackBy: string = 'label';

  @Watch('val')
  dataDidChangeHandler(val) {
    this.emitValueChanged(val);
  }

  @Event() input2: EventEmitter<OptionItem>;
  emitValueChanged(value: OptionItem) {
    this.input2.emit(value);
  }

  componentWillLoad() {
    // this.dataDidChangeHandler(this.value);
  }

  selectValue(option) {
    this.val = option;
    this.opened = false;
  }

  toggleDropdown(open) {
    if (open === undefined) open = !this.opened;

    if (open) {
      this.clickHandler = event => this.closeOnClickOut(event);
      document.addEventListener('mousedown', this.clickHandler);
    } else {
      document.removeEventListener('mousedown', this.clickHandler);
    }
    this.opened = open;
  }

  isSelected(option) {
    return option[this.trackBy] === this.val[this.trackBy];
  }

  // Events
  closeOnClickOut(event: MouseEvent) {
    // This doesn't work if we're in a shadow dom,
    //    because event.target is always Host and we can't check if click was inside
    if (!isChildOf(event.target as HTMLElement, this.div)) {
      this.opened = false;
    }
  }

  render() {
    return (
      <Host>
        <div class="zen-multiselect" ref={el => this.div = el}>
          <p>val '{ JSON.stringify(this.val) }'</p>
          <div tabindex="0" class={{
              field: true,
              opened: this.opened
            }}
            onClick={() => {this.toggleDropdown(true)}}>
            {this.val.label || 'Select something'}
            <div class="arrow"></div>
          </div>
          {this.opened
            ? <ul class="list">
              { this.options.map((option) =>
                <li
                  class={{ selected: this.isSelected(option) }}
                  onClick={() => this.selectValue(option)}
                >{option.label}</li>
              )}
            </ul>
            : <ul></ul>
            // : <slot></slot>
          }
          {/* <slot></slot> */}
        </div>
      </Host>
    );
  }

}
