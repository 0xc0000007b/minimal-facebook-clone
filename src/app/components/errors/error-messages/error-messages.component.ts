import {Component, Input} from '@angular/core';

@Component({
  selector: 'prog-error-messages',
  template: `<div class="test">{{ messageProps }}</div>`,
})
export class ErrorMessagesComponent {
  @Input('message') messageProps: string =
    'Somethings went wrongs...';
}
