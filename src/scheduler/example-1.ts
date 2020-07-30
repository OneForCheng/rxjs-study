/*
  Scheduler (调度器)
*/

import { from, asyncScheduler } from 'rxjs';

const observable = from([1,2,3], asyncScheduler)

console.log('just before subscribe');
observable.subscribe({
    next: x => console.log('got value ' + x),
    error: err => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done')
});
console.log('just after subscribe');
