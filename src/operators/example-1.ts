/*
  什么是操作符
*/

import { from, Observable } from 'rxjs';


// 操作符本质上是一个纯函数 (pure function)，它接收一个 Observable 作为输入，并生成一个新的 Observable 作为输出。

function multiplyByTen(input) {
    const output = new Observable(function subscribe(observer) {
        input.subscribe({
            next: (v) => observer.next(10 * v),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        });
    });
    return output;
}

const input = from([1, 2, 3, 4]);
const output = multiplyByTen(input);
output.subscribe(x => console.log(x));
