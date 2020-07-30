/*
  Observer (观察者)
*/

import { Observable } from 'rxjs';

const observable = new Observable(function (observer) {
    // 通知观察者
    observer.next(1);
    observer.next(10);
    observer.complete();
    observer.next(20);
});


// 定义观察者
const observer = {
    next: (value) => console.log(value),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification')
}


// 提供观察者
observable.subscribe(observer);
