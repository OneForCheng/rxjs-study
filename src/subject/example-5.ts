/*
  Subject - ReplaySubject
*/

import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject(3); // 为新的订阅者缓冲3个值

// 除了缓冲数量，可以指定 window time (以毫秒为单位)来确定多久之前的值可以记录
// 可以缓存10 个，但 window time 参数只设置了500毫秒
// const subject = new ReplaySubject(10, 500);

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

subject.next(5);
