/*
  Subscription (订阅) - 取消单个订阅
*/

import { interval } from 'rxjs';


const observable = interval(1000);


const subscription = observable.subscribe(x => console.log(x));


setTimeout(() => {
    subscription.unsubscribe();
}, 5000)
