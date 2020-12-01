/***
 * 节流
 * 原理：节流函数不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的
 * 事件处理函数。
 * 代码实现有两种，一种是时间戳，另一种是定时器
 * 概念：限制一个函数在一定时间内只能执行一次
 * Throttle: 第一个人说了算。
 */
//时间戳实现
function throttle(func, delay) {
    let prev = Date.now();
    return function () {
        const context = this;
        const args = arguments;
        const now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}
//
//定时器实现
function throttle_timer(func, delay){
    let timer = null;
  
    return function(){
      let context = this;
      let args    = arguments;
      if(!timer){
        timer = setTimeout(function(){
          func.apply(context, args);
          timer = null;
        }, delay);
      }
    }
}