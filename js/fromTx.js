/**
 * 题目来自：https://blog.csdn.net/qq_20264891/article/details/79158495
*/

/**
 * Ajax发送请求的步骤
 * 1.xhr.open();
 * 2.xhr.send();
 * 3.callback()
*/

/**
 * 浏览器里面的事件都会按照一定的规则去传递，这个规则是什么？
 * ps: 事件冒泡和事件捕获或由内到外
 */

/**
 * 事件代理
 * ps: 利用冒泡规则，将一类dom的事件委托给指定的元素作处理，统一管理一个类型的所有事件
 * @example
 * <ul>
 *   <li>1</li>
 *   <li>2</li>
 * </ul>
 * const lis = document.querySelectorAll('li');
 * for (let i = 0; i < lis.length; i++) {
 *   lis[i].onclick = function () {
 *      console.log(this.textContent);
 *   }
 * }
 * const ul = document.querySelector('ul')
 * ul.onclick = function (e) {
 *  如果同时执行li和ul的事件可以很好的说明事件的传递规则，由内到外，冒泡传播
 *  console.log(e.target.textContent);
 * }
*/

/**
 * 闭包是什么，用在什么场景?
 * 变量常驻内存会带来什么问题
 * 如何避免这种问题
 * 怎么销毁
 * ps: 闭包的概念 => 1.可以访问外部函数作用域中的变量的函数
 *                 2.被内部函数访问的外部函数变量可以保存在外部函数作用域内而不被回收
 * ps: 使用场景 => 管理私有变量和私有方法，将变量（状态）的变化封装在安全环境中
 *     实现函数柯里化和反柯里化
 * ps: 变量常驻内存会导致内存泄露
 * ps: 解除对闭包的引用。
 * @example
 * function test = () {
 *  var a = 0;
 *  return function () {
 *     a += 1;
 *  }
 * }
 * 
 * var t = test();
*/

/**
 *  call 和 apply
 *  ps: 对象冒充， 修改表达式执行的上下文
 * @example
 * function getName() {
 *  console.log(this.name);
 * } 
 * const jack = {
 *  name: 'jack'
 * }
 * 
 * const sam = {
 *   name: 'sam'
 * }
 * 
 * getName.call(jack);
 * getName.call(sam);
*/

/**
 * 跨域
*/

/**
 * 盒模型
*/

/**
 * XSS和CSRF
*/

/**
 * JS继承
*/

/**
 * 页面优化
*/

/**
 * 浏览器如何指定一个文件是否需要缓存
*/

/**
 * HTTP状态码
*/

/**
 * 已经上线的项目，出了问题，如何处理
*/

/**
 * webpack的优点和使用场景
*/

/**
 * 页面内有一个正方形元素Ａ以及一个待放置区域Ｂ，
 * 实现对齐拖拽和放下到Ｂ区域内，并且改变Ｂ区域背景色（js实现）
*/

/**
 * 实现超出整数存储范围的两个大正整数之和
*/

function calc2LargeIntegerSum(a, b) {
  const a1 = [...a].reverse();
  const a2 = [...b].reverse();
  const l1 = a1.length;
  const l2 = a2.length;
  const arr = [];
  if (l1 > l2) {
    for (let i = 0; i < l1; i++) {
      if (a2[i]) {
        arr.push(+a1[i] + (+a2[i]));
      } else {
        arr.push(a1[i]);
      }
    }   
  } else {
    for (let i = 0; i < l2; i++) {
      if (a1[i]) {
        arr.push(+a1[i] + (+a2[i]));
      } else {
        arr.push(a2[i]);
      }
    }
  }
  return arr.reverse().join('');
}

console.log(calc2LargeIntegerSum('1234', '234'));

/**
 * 页面内有一个input输入框，实现在数组arr查询命中词并和autocomplte效果。
 * 
 * @example
 *  <input type="text" placeholder="搜索" onblur="search();" />
 */

const arr = ['jack', 'mark', 'jonh', 'serie'];
function search (e) {
  const ev = e || window.event;
  for (let i = 0; i < arr.length; i++) {
    if (~arr[i].indexOf(ev.target.value)) {
      ev.target.value = arr[i];
      break;
    }    
  }
}