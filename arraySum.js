/**
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

请返回 nums 的动态和。

 输入：nums = [1,2,3,4]
输出：[1,3,6,10]
解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。

输入：nums = [1,1,1,1,1]
输出：[1,2,3,4,5]
解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。

输入：nums = [3,1,2,10,1]
输出：[3,4,6,16,17]
 * 
 * **/
var arrNew = []
function sumArray(arr){
    
    if (arr.length==1) return arr;
    for (let i = 0;i<arr.length;i++){
         if (i==0){
             arr[i]=arr[0]
         }else{
             arr[i]=arr[i-1]+arr[i]
         }
    }
    return arr
}
console.log(sumArray([1,2,3,4,5,6,7]))