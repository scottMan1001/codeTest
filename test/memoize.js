function memoize(func) {
  const memoized = (...args) => {
    const key = args[0];
    if (memoized.cache.has(key)) {
      return memoized.cache.get(key);
    }
    const result = func.apply(this, args);
    memoized.cache.set(key, result);
    return result;
  };
  memoized.cache = new WeakMap();
  return memoized;
}
var ms = { a: 1, b: 2 };
var values = memoize((obj) => Object.values(obj));
console.log(values(ms));
ms.a = 3;
console.log(values(ms));
