/*
  Subject - 多播的 Observables
*/

import { Subject, ConnectableObservable, interval } from 'rxjs';
import { multicast } from 'rxjs/operators';

const source = interval(500);
const subject = new Subject();
const multicasted = source.pipe(multicast(subject));
let subscription1, subscription2, subscriptionConnect;

subscription1 = multicasted.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

// 这里我们应该调用 `connect()`，因为 `multicasted` 的第一个
// 订阅者关心消费值
subscriptionConnect = (multicasted as ConnectableObservable<number>).connect();

setTimeout(() => {
    subscription2 = multicasted.subscribe({
        next: (v) => console.log('observerB: ' + v)
    });
}, 600);

setTimeout(() => {
    subscription1.unsubscribe();
}, 1200);

// 这里我们应该取消共享的 Observable 执行的订阅，
// 因为此后 `multicasted` 将不再有订阅者
setTimeout(() => {
    subscription2.unsubscribe();
    subscriptionConnect.unsubscribe(); // 用于共享的 Observable 执行
}, 2000);
