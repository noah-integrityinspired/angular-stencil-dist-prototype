import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  constructor() {
    console.log(`Hello from MyComponent; I'm from the stencil component that then gets wrapped in an angular lib so that I can be used in this angular app!`)
  }

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * Size of input
   */
  @Prop() size: number;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>
      <div>Hello, World! I'm {this.getText()}</div>
      <input size={this.size}/>
    </div>
  }
}
