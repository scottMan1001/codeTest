import { of, map, take } from "rxjs";

of(1, 2, 3)
  .pipe(
    map((x) => x * x),
    take(2)
  )
  .subscribe(console.log);
