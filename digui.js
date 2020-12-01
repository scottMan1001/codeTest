/**
 * 递归应用之一 扁平化数组
 * eg： arr = [1,2,3,4,[5,6,[7,8,9,[10,11]]]]
 * ** */
let newArr = [];
function flow(arr){
   //递归条件
    if(Array.isArray(arr)){
        for (let i =0;i<arr.length;i++){
            flow(arr[i])
        }
    }
     //基线条件
    else {
        newArr.push(arr)
    }
}
flow([1,2,3,4,[5,6,[7,8,9,[10,11]]]])
console.log(newArr)