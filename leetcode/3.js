/**
 * 无重复字符的最长子串
 *
 * **/
function maxStrLength(str) {
  let max = 0,
    start = 0;
  const hashMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (hashMap.has(str[i])) {
      start = Math.max(hashMap.get(str[i]) + 1, start);
    }
    hashMap.set(str[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
}
console.log(maxStrLength("abcabcbb")); //3
