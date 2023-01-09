function deepClone(source, hash = new WeakMap()) {
  const _deepClone = (source) => {
    if (typeof source !== "object" || source === null) return source;

    if (hash.has(source)) {
      return hash.get(source);
    }

    const result = Array.isArray(source) ? [] : {};
    hash.set(source, result);
    for (const item in source) {
      result[item] = _deepClone(source[item]);
    }
    return result;
  };
  return _deepClone(source);
}
var book = {
  price: 100,
  title: "大秦帝国",
};
var arr = [[0], 1];
var target = {
  book: book,
  arr: arr,
  num: 10,
  func: () => {
    console.log("这是个函数呀");
  },
};
target.xunhuan = target;
const obj = deepClone(target);
//   console.log(deepClone(target))
// target.xunhuan = target;
console.log(obj === target);
console.log(obj);
