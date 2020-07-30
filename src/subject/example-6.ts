/*
  Subject - AsyncSubject
*/

import { AsyncSubject } from 'rxjs';

// AsyncSubject 和 last() 操作符类似，因为它也是等待 complete 通知，以发送一个单个值
const subject = new AsyncSubject();

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
subject.complete();
