const ms = [100, 56, 32, 78, 98];
function flowPop(ms) {
  for (let i = 0; i < ms.length - 1; i++) {
    for (let j = 0; j < ms.length - 1 - i; j++) {
      // if(ms[j]>ms[j+1]){
      //     [ms[j],ms[j+1]]=[ms[j+1],ms[j]]
      // }
      if (ms[j] < ms[j + 1]) {
        [ms[j], ms[j + 1]] = [ms[j + 1], ms[j]];
      }
    }
  }
}
flowPop(ms);
console.log(ms);
