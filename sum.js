function add (...args){
    var f  = add.bind(null,...args);
    f.toString = ()=>{
       return args.reduce((a,b)=>a+b,0)
    }
    return f
}
// add.toString=()=>0
const add3  = add(0, 1)(2) // add3的功能是对传入的数值加3并返回
console.log(  +add(0, 1)(2)(2)) // log出5