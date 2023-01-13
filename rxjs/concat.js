import { interval, take, range, concat } from "rxjs";

const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe((x) => console.log(x));

console.log("Start");
const promiseA$ = defer(() =>
  from(
    new Promise((reslove, reject) => {
      setTimeout(() => {
        reslove("PromiseA");
      }, 1000);
    })
  )
);
const promiseB$ = defer(() =>
  from(
    new Promise((reslove, reject) => {
      setTimeout(() => {
        reslove("PromiseB");
      }, 1000);
    })
  )
);

// 会依次间隔一秒打印Start, PromiseA, PromiseB
concat(promiseA$, promiseB$).subscribe((x) => console.log(x));
