/**
 * 题目来自： 渔歌－博客园
 * 链接：www.cnblogs.com/yugege/p/5292612.html
*/

/**
 * 1. 有一个长度为未知的数组a
 * 2. 如果它的长度为0，就把数字1添加到数组里
 * 3. 否则按照先进先出的队列规则让第一个元素出队(字数小于30)
 * ps: 队列规则指数组的一些操作方法，如: push,pop,unshif,shif
 * ps: 有字数限制，使用三目运算符
*/

a.length ? a.shift() : a.push(1) || a.length === 0 ? a.push(1) : a.shift();

/**
 * 1.下面代码会输出什么
 * @example
 * ps: 结果是5
 * ps: 这道题考察了两个概念，函数自执行和闭包
 * ps: test(4) 相当于 return function (b) {}
*/

var test = (function (a) {
  this.a = a;
  return function (b) {
    return this.a + b;
  }
} (function (a, b) {
  return a;
} (1, 2)));

console.log(test(4)); // 5

/**
 * 1.请把<ul><li>第1行</li><li>第2行</li>...</ul>(ul之间有10个li元素)插入body里
 * 2.需要考虑到性能问题.
 * ps: dom插入的方法有appendChild,insertBefore,但都是单一操作，对于多个元素性能开销较大
 * ps: 可以使用innerHTML方法设置一个字符串
*/

var lis = '',
  ul = document.createElement('ul') || document.createDocumentFragment('ul');
// 将10个li以字符串的形式生成
for (var i = 1; i <= 10; i++) {
  lis += `<li>第${i}行</li>`;
}
// 最后通过innerHTML插入
ul.innerHTML = lis;
document.body.appendChild(ul);

/**
 * 1.不使用loop循环，创建一个长度为100的数组，
 * 2.并且每个元素的值等于它的下标
 * ps: 使用map遍历
 * ps: 对于数组中被删除（delete）或者根本从未赋值的索引项，map中第一个函数参数是不会执行的
 * ps: 用数组切割的方法使每个索引都有元素占位.
*/
var arr = new Array(100).join(',').split(',').map((item, index) => index);

/**
 * 1.实现对数组进行乱序
 * ps: sort方法，random产生随机数
*/

var sortArr = new Array(10).join(',').split(',').map((item, index) => index + 1),
  sign = 1;
sortArr.sort((a, b) => {
  sign = (Math.random() > 0.5) ? 1 : -1;
  return (a - b) * sign;
});

/**
 * 1.有偶一个长度为100的数组，请以优雅的方式求出该数组的前10个元素之和
 * ps: 限制条件(优雅，前十元素)
 * arr 借用上面的
*/

var sum = 0;
sum = arr.slice(0, 10).reduce((pre, current) => {
  return pre + current;
});
console.log(sum);

/**
 * js实现继承的常用方法有哪些？你推荐一种。
 * ps: << javascript高级程序设计 >>第六章
*/

/**
 * 在项目开发完成后，根据雅虎性能优化规则，需要对html,js,css图片需要做怎样的处理?是否可以借助构件工具实现自动化?
 * ps: 减少http请求,减少带宽，提高加载速度，等方面回答，对于自动化，webpack,gulp.
*/

/**
 * 当项目的某个模块发送问题了，你是如歌定位错误？
 * ps: 断点调试.谷歌控制台
*/

/**
 * 我们在跟后端进行异步请求时，很容易陷入嵌套太深的陷阱
 * ps: 该题可能是说的是回调地狱 使用promise 或 async await
*/ 

/**
 * 请写一个正则表达式匹配所有二级域名是9game.cn和其他目录下的网址
 * @example 
 *  http://abc.9game.cn/sname/view/
*/