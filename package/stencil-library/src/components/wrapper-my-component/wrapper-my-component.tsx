import { Component, h } from '@stencil/core';

@Component({
  tag: 'wrapper-my-component',
  styleUrl: 'wrapper-my-component.css',
  shadow: true,
})
export class WrapperMyComponent {
  render() {
    return (
      <div>
        <h1>Wrapper My Component</h1>
        <my-component first="hello" last="world" size={15}></my-component>
      </div>
    );
  }
}
