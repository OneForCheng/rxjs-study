/*
  产生值
*/

import { fromEvent, interval } from 'rxjs';
import { distinct, distinctUntilChanged, map, pairwise, pluck, take } from 'rxjs/operators';

const input = fromEvent(document.querySelector('input'), 'input');

// 传递一个新的值

// input.pipe(
//     map(event => (event.target as HTMLInputElement).value),
// ).subscribe(value => console.log(value));


// 通过提取属性传递一个新的值

// input.pipe(
//     pluck('target', 'value'),
// ).subscribe(value => console.log(value));


// 传递之前的两个值

// interval(1000)
//     .pipe(
//         pairwise(),
//         take(5)
//     ).subscribe(console.log);


// 只会通过唯一的值

// input.pipe(
//     pluck('data'),
//     distinct(),
// ).subscribe(console.log);


// 不会传递连续重复的值

input.pipe(
    pluck('data'),
    distinctUntilChanged(),
).subscribe(console.log);
