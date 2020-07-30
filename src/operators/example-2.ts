/*
  实例操作符 vs 静态操作符
*/

import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators'


// 实例操作符 (即 Observable 实例上的方法)

// @ts-ignore
Observable.prototype.multiplyByTen = function multiplyByTen() {
    var input = this;
    return new Observable(function subscribe(observer) {
        input.subscribe({
            next: (v) => observer.next(10 * v),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        });
    });
}

// @ts-ignore
const observable = from([1, 2, 3, 4]).multiplyByTen();

observable.subscribe(x => console.log(x));


// 静态操作符 (即 Observable 类上的方法)

const observable1 = Observable.create(function (observer) {
    observer.next('create');
});

observable1.subscribe(x => console.log(x));
