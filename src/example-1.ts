/*
  Example 1: Observable
*/

import { Observable } from 'rxjs/Observable';

const observable = new Observable(observer => {
    setTimeout(() => {
        observer.next('Hello from a Observable!');
    }, 2000);
});

observable.subscribe(value => console.log(value));
