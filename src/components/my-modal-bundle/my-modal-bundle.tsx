import { 
    Component, 
    Prop, 
    Method, 
    Element, 
    h, 
    State, 
    Listen 
} from '@stencil/core';

@Component({
  tag: 'my-modal-bundle',
})


export class MyModalBundle {

@Element() modalEl: HTMLElement;

@Prop() headline: string;
@Prop() content: string; 

@State() show = false;

@Method()
async open() {
  this.show = true;
};

@Listen('close')
closeModalHandler() {
    this.show = false; 
}

  render() {

    let content = null;
    if(this.show) {
        content = [
            <my-backdrop></my-backdrop>,
            <my-modal headline={this.headline} content={this.content}></my-modal>
        ];
    }
    return content;

    }
}