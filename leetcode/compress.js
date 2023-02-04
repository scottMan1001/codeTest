// return a2b1c5a3
const S = "aabcccccaaa";
function compressFunc(S) {
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
}
console.log(compressFunc(S));
