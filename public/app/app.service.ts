import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Fruit } from './model/fruit';

@Injectable()
export class FruitSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Fruit[]> {
    return this.http
               .get(`dev/fruits`)
               .map(response => response.json().data as Fruit[]);
  }
}