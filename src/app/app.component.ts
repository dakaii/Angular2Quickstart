import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <user></user>
    `,
})
export class AppComponent  {
  name = 'Angular';
  email = 'Angular@gmail.com';
  address = {
    street: '12 Main st',
    city : 'Boston',
    state: 'MA'
  }
}
