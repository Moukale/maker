import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { FindFruitComponent }  from './find-fruit.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, FindFruitComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }