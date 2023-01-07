/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let str = "";
  let count = 1;
  for (let i = 1; i < S.length + 1; i++) {
    if (S[i - 1] == S[i]) {
      count++;
    } else {
      str += S.slice(i - 1, i) + count;
      count = 1;
    }
  }
  return str.length < S.length ? str : S;
};
console.log(compressString("aabbcdde"));
