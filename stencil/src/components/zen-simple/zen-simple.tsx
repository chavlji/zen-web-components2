import { Component, Host, h, Prop, /*Listen, Event, EventEmitter,State */ } from '@stencil/core';

@Component({
  tag: 'zen-simple',
  styleUrl: 'zen-simple.css',
  shadow: true,
})
export class ZenSimple {

  // @State() open: boolean;

  @Prop() name: string;
  @Prop() opened: boolean = true;
  @Prop() value: string = 'Initial value';

  setEnable(text, ev) {
    console.log('text', text);
    console.log('event', ev);
  }
  setValue(text, ev) {
    console.log('text', text);
    console.log('event', ev);
  }
  onValueInputChange(event) {
    this.value = event.target.value;
  }

  /* @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent){
    if (ev.key === 'ArrowDown'){
      console.log('down arrow pressed')
    }
  } */

  /* @Listen('click', { capture: true })
  handleClick(ev: MouseEvent) {
    console.log(ev);
    this.open = !this.open;
  } */

  render() {
    return (
      <Host>
        <h3>Stencil with shadow: true</h3>
        <p>Name: {this.name}</p>
        <p>Value: {this.value}</p>
        <p>Opened: {this.opened ? 'Opened' : 'Closed'}</p>
        <input type="text"/>
        <input type="text" placeholder="Insert something" value={this.value} onChange={(event) => this.onValueInputChange(event)}/>
        <button onClick={() => {this.opened = !this.opened}}>Toggle</button>
        <button onClick={this.setEnable.bind(this, 'poslano')}>Bind set</button>
        <button>{this.opened ? "On" : "Off"}</button>
        <slot></slot>
      </Host>
    );
  }

}
