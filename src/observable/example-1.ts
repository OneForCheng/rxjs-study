/*
  Observable 同步传递值
*/

import { Observable } from 'rxjs';

const observable = Observable.create(function (observer) {
    console.log('Hello');
    observer.next(42);
    observer.next(100); // “返回”另外一个值
    observer.next(200); // 还可以再“返回”值
});

console.log('before');
observable.subscribe(function (x) {
    console.log(x);
});
console.log('after');
