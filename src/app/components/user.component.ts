import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Address: </strong> {{address.street}} {{address.city}} {{address.state}}</p>
    `,
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  

    constructor(){
        this.name = 'Angular';
        this.email = 'Angular@gmail.com';
        this.address = {
            street: '12 Main st',
            city : 'Boston',
            state: 'MA'
    }
  }
}

interface address {
    street: string;
    city: string;
    state: string;
}