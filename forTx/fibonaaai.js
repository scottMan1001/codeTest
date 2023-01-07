/***
 * 斐波那契数，指的是这样一个数列：1、1、2、3、5、8、13、21、……
 * 在数学上，斐波那契数列以如下被以递归的方法定义：F0=0，F1=1，Fn=Fn-1+Fn-2（n>=2，n∈N*），、
 * 用文字来说，就是斐波那契数列由 0 和 1 开始，之后的斐波那契数列系数就由之前的两数相加。
 *
 * ** */
// function fibonacci(n){
//     if(n==0)return 0
//     else if(n==1)return 1
//     else return fibonacci(n-1) + fibonacci(n-2)
//  }
console.log(fibonacci(10));

//改进递归 将前两位数字做成参数避免重复计算
function fibonacci(n) {
  function fib(n, v1, v2) {
    if (n == 1) return v1;
    if (n == 2) return v2;
    else return fib(n - 1, v2, v1 + v2);
  }
  return fib(n, 1, 1);
}

//for 循环版本
function Fibonacci(n) {
  // write code here
  // 0 1 1 2 3 5 8 13 21
  var n1 = 1,
    n2 = 1,
    sum = 0;
  if (n == 0) return 0;
  if (n == 1 || n == 2) return 1;
  for (let i = 2; i < n; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }
  return sum;
}
