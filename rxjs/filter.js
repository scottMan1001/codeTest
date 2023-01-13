import { filter, interval, take } from "rxjs";

interval(1000)
  .pipe(filter((d) => d % 2 == 0))
  .subscribe(console.log);
