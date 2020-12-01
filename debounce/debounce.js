/******
 * 函数防抖
 * 其中一种解决方案就是每次用户停止输入后，延迟超过500ms时，才去搜索此时的String，这就是防抖。
 *  原理：将若干个函数调用合成为一次，并在给定时间过去之后仅被调用一次。
 * Debounce 最后一个参赛者说了算。
 * 
 * debounce函数封装后，返回内部函数
每一次事件被触发，都会清除当前的timer然后重新设置超时并调用。这会导致每一次高频事件都会取消前一次的超时调用，导致事件处理程序不能被触发
只有当高频事件停止，最后一次事件触发的超时调用才能在delay时间后执行
 */

function debounce(fn, delay) {
    // 维护一个 timer，用来记录当前执行函数状态
    let timer = null;

    return function () {
        // 通过 ‘this’ 和 ‘arguments’ 获取函数的作用域和变量
        let context = this;
        let args = arguments;
        // 清理掉正在执行的函数，并重新执行
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    }
}
let flag = 0; // 记录当前函数调用次数
// 当用户滚动时被调用的函数
function foo() {
    flag++;
    console.log('Number of calls: %d', flag);
}

// 在 debounce 中包装我们的函数，过 2 秒触发一次
document.body.addEventListener('scroll', debounce(foo, 2000));