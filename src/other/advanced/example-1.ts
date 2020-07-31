/*
  创建自定义操作符
*/

import { interval, Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

/**
 * 自定义操作符
 */
const takeEveryNth = (n: number) => <T>(source: Observable<T>) =>
    new Observable<T>(observer => {
        return source.subscribe({
            next(x) {
                if (Number(x) % n === 0) observer.next(x);
            },
            error(err) { observer.error(err); },
            complete() { observer.complete(); }
        })
    });

/**
 * 还可以使用现有的操作符
 */
const takeEveryNthSimple = (n: number) => <T>(source: Observable<T>) =>
    source.pipe(filter((value, index) => index % n === 0 ))


interval(100).pipe(
    takeEveryNth(2),
    takeEveryNthSimple(3),
    take(3),
).subscribe(console.log);

