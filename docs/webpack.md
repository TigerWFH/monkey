# webpack 工具学习资料

# 一些概念

* 模块化:

    浏览器前端模块化：

    CMD: Common Module Definition, seajs, 就近依赖（用到时再require）

    AMD: Asynchronous Module Definition, RequireJS, 依赖前置（提前require）

    es6: 静态解析，既在解析阶段就确定输出的模块，所以es6模块的import一般写在被引入文件的开头；模块不是对象

            es6模块中，导出的并不是模块的值拷贝，而是这个模块的引用

    commonjs: 动态加载模块，即懒加载；模块既一个对象

    区别：最大区别是执行时机不一样，不是加载时机或加载方式不同，他们都是异步加载模块

    [参考资料1](https://www.cnblogs.com/code-klaus/p/9011911.html)
    [参考资料2](https://blog.csdn.net/haodawang/article/details/77199980)

* 打包

* 持久化缓存
    [张云龙的回答](https://www.zhihu.com/question/20790576/answer/523775863)

* 懒加载

* module: 形如(function(){})()的js代码

* chunk: 包含若干module的实际文件

* tree shaking


[webpack参考学习资料](https://juejin.im/post/5b56909a518825195f499806)