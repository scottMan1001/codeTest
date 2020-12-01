/**
 * 二分查找
 * 仅当arr列表有序可用
 * num 为输入元素
 * 函数返回输入元素的序号
 * 
 *  思考：while条件是收敛的
 * */
function select(num,arr){
    let low = 0;
    let high = arr.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if (arr[mid]==num){
            return mid;
        }
        if (arr[mid]>num){
            high = mid -1
        }else {
            low = mid+1
        }
    }
    return null
}
console.time('test')
console.log(select(-11,[1,2,3,4,5,6,7,8,9,10,11,12,13]))
console.timeLog('test')