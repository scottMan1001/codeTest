import { of, tap, map } from "rxjs";

of(Math.random())
  .pipe(
    tap(console.log),
    map((n) => (n > 0.5 ? "big" : "small"))
  )
  .subscribe(console.log);
