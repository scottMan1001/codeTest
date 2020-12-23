// 给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。

// （当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）

// 示例 1:

// 输入: N = 10
// 输出: 9
// 示例 2:

// 输入: N = 1234
// 输出: 1234
// 示例 3:

// 输入: N = 332
// 输出: 299
/**
 * @param {number} N
 * @return {number}
 */
// var monotoneIncreasingDigits = function (N) {
//     let arr = String(N)
//     let flag = false; //true 代表单调递增
//     //如果数字本身就是单调低等
//     for (let i = 0; i < arr.length; i++) {
//         //考虑数组边界超出问题
//         if (arr[i] <= arr[i + 1] || !arr[i + 1]) {
//             flag = true;

//         } else {
//             flag = false;
//             break;

//         }
//     }

//     if(flag){
//         return N
//     }else{
//         //超出一定范围 超出最大调用栈


//         N--;
//        return monotoneIncreasingDigits(N)
//     }

// };
var monotoneIncreasingDigits = function (N) {

    var arr = String(N).split('')
    var max = -1,idx = -1;
    for (let i = 0;i<arr.length-1;i++){
        if (max<arr[i]){
            max = arr[i];
            idx = i;
        }
        if(arr[i]>arr[i+1]){
            arr[idx]-=1;
            for(let j = idx+1;j<arr.length;j++){
                arr[j]=9
            }
            break;
        }
    }
    return Number(arr.join(''))
}
// console.log(monotoneIncreasingDigits(603253281))
console.log(monotoneIncreasingDigits(332))