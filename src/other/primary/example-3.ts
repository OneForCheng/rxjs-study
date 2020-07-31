/*
  状态和存储 (State Store)
*/

import { fromEvent, merge } from 'rxjs';
import { map, scan } from 'rxjs/operators';


const increaseButton = document.querySelector('#increase');
// 映射到一个函数，它会增加 count
const increase = fromEvent(increaseButton, 'click').pipe(
    map(() => state => Object.assign({}, state, {count: state.count + 1}))
)

const decreaseButton = document.querySelector('#decrease');
// 映射到一个函数，它会减少 count
const decrease = fromEvent(decreaseButton, 'click').pipe(
    map(() => state => Object.assign({}, state, {count: state.count - 1}))
)

const inputElement = document.querySelector('#input');
// 将按键事件映射成一个函数，它会产生一个叫做 inputValue 状态 (但由于闭包，会每次拿到上一次变化的值)
const input = fromEvent(inputElement, 'keydown').pipe(
    map(event => state => Object.assign({}, state, {inputValue: (event.target as HTMLInputElement).value}))
)

// 将这三个改变状态的 observables 进行合并
const state = merge(
    increase,
    decrease,
    input
).pipe(
    scan((state, changeFn) => {
        return changeFn(state)
    }, {
        count: 0,
        inputValue: ''
    }),
);


state.subscribe((state) => {
    document.querySelector('#count').innerHTML = state.count;
    document.querySelector('#hello').innerHTML = 'Hello ' + state.inputValue;
});
