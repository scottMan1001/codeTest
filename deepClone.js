// JSON转换
/**
 * 缺点：

（1）如果对象里有函数,函数无法被拷贝下来

（2）无法拷贝copyObj对象原型链上的属性和方法

（3）当数据的层次很深，会栈溢出
 * 
 * * */
// var targetObj = JSON.parse(JSON.stringify(copyObj))
// let arr4 = JSON.parse(JSON.stringify(arr))

//普通递归函数
/**缺点：

（1）无法保持引用

（2）当数据的层次很深，会栈溢出
 * 
 * * */
// function deepCopy(source){
//     if (!isObject(source)) return source;
//     let target = Array.isArray(source)?[]:{}
//     for (let k in source){
//         if (source.hasOwnProperty(k)){
//             if (typeof source[k]==='object') {
//                 target[k]=deepCopy(source[k])
//             }else{
//                 target[k]=source[k]
//             }
//         }
//     }
//     return target
// }
// function isObject(obj){
//     return  typeof obj === 'object' && obj !==null
// }
// let m = {a:1,b:{c:[123,12]}}
// let ks = deepCopy(m)
// m.a = 2
// console.log(m)
// console.log(ks)


/****
 * 
 * 防栈溢出函数
*/
function cloneLoop(x) {
    const root = {};

    // 栈
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: x,
        }
    ];

    while(loopList.length) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }

        for(let k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    // 下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k],
                    });
                } else {
                    res[k] = data[k];
                }
            }
        }
    }

    return root;
}
