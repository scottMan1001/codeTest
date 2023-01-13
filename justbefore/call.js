var func = (a,b)=>a+b
console.log(func.call(this,1,2))
console.log(func.apply(null,[1,2]))