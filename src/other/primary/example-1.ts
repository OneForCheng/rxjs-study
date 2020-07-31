/*
  控制流动
*/

import { fromEvent } from 'rxjs';
import { delay, filter, map, throttleTime, debounceTime, take } from 'rxjs/operators';

const input = fromEvent(document.querySelector('input'), 'input');

// 过滤掉小于3个字符长度的目标值

input.pipe(
    filter(event => (event.target as HTMLInputElement).value.length > 2),
    map(event => (event.target as HTMLInputElement).value),
).subscribe(value => console.log(value));


// 延迟事件

// input.pipe(
//     delay(1000),
//     map(event => (event.target as HTMLInputElement).value)
// ).subscribe(value => console.log(value));


// 每1000ms只能通过一个事件

// input.pipe(
//     throttleTime(1000),
//     map(event => (event.target as HTMLInputElement).value)
// ).subscribe(value => console.log(value));


// 停止输入后1000ms方能通过最新的那个事件

// input.pipe(
//     debounceTime(1000),
//     map(event => (event.target as HTMLInputElement).value)
// ).subscribe(value => console.log(value));


// 在3次事件后停止事件流

// input.pipe(
//     take(3),
//     map(event => (event.target as HTMLInputElement).value)
// ).subscribe(value => console.log(value));
