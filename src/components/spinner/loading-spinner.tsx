import { Component, h } from '@stencil/core';

@Component({
  tag: 'loading-spinner',
  styleUrl: 'loading-spinner.scss'
})
export class loadingSpinner {


  render() {
    return (
        <svg viewBox= "0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle class="spin_circle outer" cx="50" cy="50" r="45"></circle>
        <circle class ="spin_circle middle" cx="50" cy="50" r="30"></circle> 
        <circle class="spin_circle inner" cx="50" cy="50" r="15"></circle>
    </svg>

    );
  }
}