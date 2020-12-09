//不使用中间变量 排序这样的m数组
var m = [{obj:{id:2}},{obj:{id:1}}]
m.sort((a,b)=>{return a.id-b.id})
console.log(m)