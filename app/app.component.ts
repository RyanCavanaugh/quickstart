import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{foo}}</h>`,
})
export class AppComponent  { name = 100; foo = 'what'; }


