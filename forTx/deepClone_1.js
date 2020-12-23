var book = {
    price:100,
    title:'大秦帝国'
}
var arr = [[0],1]
var target = {
    book:book,
    arr:arr,
    num:10,
    func:()=>{console.log('这是个函数呀')}
}

function deeepClone(target){
    const source = Array.isArray(target)?[]:{};
    if(typeof target == 'object'){
        for (let item in target){
            if(target.hasOwnProperty(item)){
                if (typeof target[item] == 'object'){

                    source[item] = deeepClone(target[item])
                }else{
                    source[item]=target[item]
                }
            }
           
        }
    }
    return source;
}
var obj = deeepClone(target);
obj.func = ()=>{console.log("这是被修改得函数")}
console.log(target.func())  //实现深拷贝