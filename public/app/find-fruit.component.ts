import { Component } from '@angular/core';
import {Fruit} from './model/fruit';

@Component({
  selector: 'find-fruit',
  templateUrl: `app/find-fruit.component.html`
})

export class FindFruitComponent { 

    values = new Array<Fruit>();

    onKey(event: any) { // without type info
        //this.values += event.target.value + ' | ';
    }
}