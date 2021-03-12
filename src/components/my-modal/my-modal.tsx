import { Component, Prop, Method, Element, h } from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.scss'
})
export class MyModal {

@Element() modalEl: HTMLElement;

@Prop() head: string;
@Prop() content: string; 

@Method()
async open() {
  this.modalEl.style.display = 'block';
};

  render() {
    return (
      <div>
        <h1>{this.head}</h1>
        <p>{this.content}</p>
        <hr/>
        <button class="btn">Show Options</button>
      </div>
      

    );
  }
}