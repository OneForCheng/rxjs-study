/*
   Observable 剖析
*/

import { Observable } from 'rxjs';


// 创建 Observable
const observable = new Observable(function (observer) {
    // 追踪 interval 资源
    const intervalID = setInterval(() => {
        observer.next('hi');
    }, 1000);

    observer.next(1);
    observer.next(2);
    observer.next(3);
    // observer.complete();
    observer.next(4);


    // 提供取消和清理 interval 资源的方法
    return function unsubscribe() {
        clearInterval(intervalID);
    };
});


// 订阅 Observable 并执行
const subscription = observable.subscribe(x => console.log(x));


// 清理 Observable 执行
// subscription.unsubscribe()
