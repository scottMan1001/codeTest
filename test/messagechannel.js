function deeepClone(obj) {
  return new Promise((resolve) => {
    const { port1, port2 } = new MessageChannel();
    port1.postMessage(obj1);
    port2.onmessage = (msg) => {
      resolve(msg.data);
    };
  });
}
const obj1 = {
  a: 1,
  b: 2,
  c: 5,
};
obj1.c = obj1;
const obj2 = deeepClone(obj1);
console.log(obj2.then((o) => console.log(o)));
