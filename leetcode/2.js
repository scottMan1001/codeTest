// 剑指 Offer 46. 把数字翻译成字符串
// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，
// 1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。
// 请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法
function numTranslate(num) {
  const numStr = num.toString();
  const len = numStr.length;
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 1; i < len; i++) {
    dp[i + 1] = dp[i];
    const currentNum = 10 * numStr[i - 1] + Number(numStr[i]);
    if (currentNum > 9 && currentNum < 26) {
      dp[i + 1] = dp[i] + dp[i - 1];
    }
  }
  return dp[len];
}
console.log(numTranslate(12258));
