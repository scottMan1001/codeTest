import { concat, defer, from, of } from "rxjs";
import { tap, concatAll } from "rxjs/operators";

/*
oncatAll顺序接受上游抛出的各个数据流作为它的数据， 
若前面的数据流不能同步的完结，它会暂存后续数据流，
当前数据流完成后它才会订阅后一个暂存的数据流
**/
console.log("Start");

const promiseA$ = defer(() =>
  from(
    new Promise((reslove, reject) => {
      console.log("PromiseA is been Subscribed ");
      setTimeout(() => {
        reslove("PromiseA");
      }, 1000);
    })
  )
);

const promiseB$ = defer(() =>
  from(
    new Promise((reslove, reject) => {
      console.log("PromiseB is been Subscribed ");
      setTimeout(() => {
        reslove("PromiseB");
      }, 1000);
    })
  )
);

// 会依次间隔一秒打印Start, PromiseA, PromiseB
of(promiseA$, promiseB$)
  .pipe(tap(console.log), concatAll())
  .subscribe(console.log);
