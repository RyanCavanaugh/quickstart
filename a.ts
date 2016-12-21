import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {name}}</h1>`,
})
export class AppComponent  { name = 100; }
