function strMax(str) {
  const map = new Map();
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      count = map.get(str[i]) + 1;
      //   count++;
    } else {
      count = 1;
    }
    map.set(str[i], count);
  }
  console.log("MAPKEYS==>", map.keys());
  console.log("MAPvalues==>", map.values());
}

strMax("aaabbdde");
