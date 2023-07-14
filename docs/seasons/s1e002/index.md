# s1e002: `lodash`的使用

先介绍`lodash`中的几个函数（`now`、`size`、`isPlainObject`、`every`、`memoize`）的用法。因为`lodash-cli`源码中有用到，所以要先学。当然，看源码之前，最好熟练掌握其功能，以便看源码时能清楚把源码行或块与功能之间的对应起来。

## 终端操作

```cmd
# 进入`lodash`源码目录
cd lodash
# 切换到es分支
git checkout es
```

## `now`

###  `vscode`打开`date.js`文件

使用`Dependency Cruiser Extension`插件中的快捷键，打开文件依赖图。

![Dependency Cruiser Extension_preview](/images/DependencyCruiserExtension_preview.jpg)

可以看到，`now.js`这个文件最原始的依赖为`_freeGlobal.js`文件。点击打开该文件，如下：

```js
/** Detect free variable `global` from Node.js. */
/** 检测是否有来自Node.js中的`global`变量 */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

export default freeGlobal;
```

此文件就是把前端各个不同环境下的全局根对象给找到导出来。上面的代码的意思是如果为`node`环境（`node`环境下有全局根对象`global`），则导出`global对象`。`typeof`为前端基本类型判断方法（具体基础知识可翻译[网道](https://wangdoc.com/javascript/)、[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)、[runnoob](https://www.runoob.com/js/js-tutorial.html)这些网址，这里不赘述）。`&&`有短路作用，例如`a && b`，当`a`为`false`时，`b`不会执行，整体`a && b`会返回`false`；当`a`为`true`时，整体`a && b`会返回执行`b`后的结果。所以上面源码就是判断当有`global`对象，且为`node`环境下的`gloabl`，则返回`global`。可以在`node`中测试一下：

```node
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
// 上面执行后的结果和global是同一个对象
console.log(freeGlobal === global)
```

### `_root.js`文件

点击依赖图上面的`_root.js`（或直接打开）。可以看到源码如下：

```js
import freeGlobal from './_freeGlobal.js';

/** Detect free variable `self`. */
/** 检测是否有`self`变量。 */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
/** 使用于全局对象的引用 */
var root = freeGlobal || freeSelf || Function('return this')();

export default root;
```

这里的`freeSelf`和`freeGlobal`的逻辑是一样的，这里处理的场景是前端某些根对象为`self`的情况。`root`是先看有没有`global`，再看有没有`self`，最后再看`this`。`||`也有短路作用，只有当前面为`false`时，才会接着判断后面的内容。`Function('')()`是立即执行函数。这整个`freeGlobal || freeSelf || Function('return this')()`的判断，跟很多`UMD`包的判断逻辑基本一致（`UMD`包中还有`window`的判断，即判断是否是在浏览器环境中），无非是判断先后顺序的问题，`global`、`self`和`window`的先后顺序不重要。

### `now.js`文件

```js
import root from './_root.js';

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * 获取自Unix时期(1 月 1970 00:00:00 UTC)之后经过的毫秒数的时间戳
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp. 返回时间戳
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 * // => 记录延迟调用所用的毫秒数。
 */
var now = function() {
  return root.Date.now();
};

export default now;
```

上面代码其实就是在`node.js`中执行`Date.now()`返回的结果，即为当前时间戳，结果类似于`1689340915733`这样的数字。

### `date.default.js `文件

```js
import now from './now.js';

export default {
  now
};
```

默认导出。



自此，`lodash`中的`Date`大类就源码解析完毕。



### `size`
