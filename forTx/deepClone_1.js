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
// 无法处理循环引用
function deeepClone(target) {
  const source = Array.isArray(target) ? [] : {};
  if (typeof target == "object") {
    for (let item in target) {
      if (target.hasOwnProperty(item)) {
        if (typeof target[item] == "object") {
          source[item] = deeepClone(target[item]);
        } else {
          source[item] = target[item];
        }
      }
    }
  }
  return source;
}

function deepCopy(target) {
  const source = Array.isArray(target) ? {} : [];
  for (const i in target) {
    if (target.hasOwnProperty(i)) {
      if (typeof target[i] == "object") {
        source[i] = deeepClone(target[i]);
      } else {
        source[i] = target[i];
      }
    }
  }
  return source;
}

var obj = deepCopy(null);
// var obj = Object.assign({},target);
// obj.arr[0][0] = 100;
// obj.func = ()=>{console.log("这是被修改得函数")}
console.log(obj);
// console.log(target.arr); //实现深拷贝
