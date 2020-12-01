function curryAdd(x,y){
    return function(y){
        return x+y
    }
}
console.log(curryAdd(1)(2))
// good for currying
