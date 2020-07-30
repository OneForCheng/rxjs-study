/*
  Subscription (订阅) - 取消合并订阅
*/

import { interval } from 'rxjs';


const observable1 = interval(400);
const observable2 = interval(300);

const subscription = observable1.subscribe(x => console.log('first: ' + x));
const childSubscription = observable2.subscribe(x => console.log('second: ' + x));

subscription.add(childSubscription);

setTimeout(() => {
    // subscription 和 childSubscription 都会取消订阅
    subscription.unsubscribe();
}, 2000);
