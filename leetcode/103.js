// 2 5 7 ,商品总额27，使用最少量面额
//递归
// function f(X) {
//   if (X == 0) return 0;
//   let res = Infinity;
//   if (X >= 2) {
//     res = Math.min(f(X - 2) + 1, res);
//   }
//   if (X >= 5) {
//     res = Math.min(f(X - 5) + 1, res);
//   }
//   if (X >= 7) {
//     res = Math.min(f(X - 7) + 1, res);
//   }
//   return res;
// }
/**
 * dp
 * 初始条件f[0]=0
 * 边界条件 数组不越界
 * 转移方程： f[x]=min{f[x-2]+1,f[x-5]+1,f[x-7]+1}
 * 自底而上
 *
 */
function f(coins = [], amount) {
  const f = new Array(amount + 1);
  const n = coins.length;
  f[0] = 0;
  for (let i = 1; i <= amount; i++) {
    f[i] = Infinity;
    //last coin A[j]
    for (let j = 0; j < n; j++) {
      if (i >= coins[j]) {
        f[i] = Math.min(f[i - coins[j]] + 1, f[i]);
      }
    }
  }
  if (f[amount] == Infinity) {
    f[amount] = -1;
  }
  return f[amount];
}
console.log(f([2, 5, 7], 10));
