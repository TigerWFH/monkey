## 控件目录
此目录存放通用型很强的控件

# 1、何时使用flex进行布局？

    flex可以用来处理多余空间的分配问题；当没有多余空间时，完全可以使用block元素进行布局(div)
# 2、translate详解

    1、translate中的百分比是相对于自身尺寸的

# 3、文本控制属性系列
* text-indent：行缩进
* text-align：水平对齐方式
* word-spacing：`字间隔`是指单词间距，用来设定文字或单词之间的间距。实际上，"字"表示的是任何非空白字符组成的串，并由某种空白符包围。
```
word-spacing: <length>|normal|inherit
```
* letter-spacing：`字母间距`指字符间距离
```
letter-spacing: length | inherit | normal
```
*  text-transform：`文本转换`
```
text-transform: uppercase | lowercase | capitalize | none | inherit
```
* text-decration：`文本修饰`
```
text-decration: none | underline | overline | line-through | inherit
```
* white-space：`空白符`是指空格、制表符和回车；HTML默认把所有空白符合并成空格。
`white-space解决不了长单词或URL地址的换行问题`
```
white-space: normal | nowrap | pre | pre-wrap | inherit;
normal: 合并空白符，允许自动换行。
nowrap: 合并空白符，不允许自动换行。
pre-line: 合并空白符（不包括换行符），允许自动换行。
pre: 不合并空白符，不允许换行。
pre-wrap: 不合并空白符，允许自动换行。
```
* word-wrap：`word-wrap属性用来实现长单词或URL地址的自动换行,css3`
```
word-wrap: normal | break-world;
```
* word-break： `CSS3使用word-break属性来决定自动换行的处理方法,css3`
```
word-wrap: normal | break-all | keep-all;
```
[white-space、word-break、word-wrap(overflow-wrap)详细比较参考资料](http://www.webhek.com/post/overflow-wrapword-wrap-word-break-white-space.html)
# 4、字体控制属性系列
* 字体系列

    serif 字体：字体成比例，且有上下短线（衬线字体）。

    sans-serif 字体： 字体成比例，且没有上下短线（无衬线字体）。

    Monospace 字体：字体不成比例，等宽字体。

    Cursive 字体：手写体。

    Fantasy 字体：无法归类的字体。
    ```
    font-family: "宋体";
    font-family: "arial"
    ```
* font-weight：字体加粗
    ```
    font-weight: normal | bold | bolder | lighter;
    font-weight: 100 | 200 | ... | 900;
    ```
* font-size：字体大小，设置的是字体中的em框大小。
    ```
    font-size: xx-small | x-small | small | medium | large | x-large | xx-large | smaller | larger | inherit | 20px | 100%;
    ```
* font-style：字体风格
    ```
    font-style: normal | italic | oblique;
    ```
* font-variant：字形
* line-height：行高

