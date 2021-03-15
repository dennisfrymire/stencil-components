import { 
  Component, 
  Prop, 
  Method, 
  Element, 
  h, 
  State, 
  Event, 
  EventEmitter
} from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.scss'
})
export class MyModal {

  buttons = ['Okay', 'Cancel'];

@Element() modalEl: HTMLElement;

@Prop() headline: string;
@Prop() content: string; 

@State() showOptions = false;

@Event() close: EventEmitter;

@Method()
async open() {
  this.modalEl.style.display = 'block';
};

closeModalHandler() {
  this.showOptions = false; 
  this.close.emit();
}

showOptionsHandler() {
  this.showOptions = true;
}

  render() {
    let options = null;
    if(this.showOptions) {
      options = (this.buttons.map(btn => (
        <button onClick={this.closeModalHandler.bind(this)}>{btn}</button>
      )));
    }
    return (
      <div>
        <h1>{this.headline}</h1>
        <p>{this.content}</p>
        <hr/>
        <button onClick={this.showOptionsHandler.bind(this)}>Show Options</button>
        <hr/>
        {options}
      </div>
      

    );
  }
}