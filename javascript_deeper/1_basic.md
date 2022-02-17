2. 

## TDC
let 声明时不会像 var 一样有变量提升。必须先声明再使用。  
TDC即临时性死区，它要求了变量必须先声明再使用。  
推荐多使用 ```let``` 声明临时变量  

## ```var``` vs ```let``` vs ```const```
变量声明会在作用域内新开内存，没有则会一层层往上找.
> let会检查当前作用域是否已声明过变量，防止重复声明使用.

### 全局污染
> 使用var声明变量防止变量提升至全局变量  
```js
function func() {
    value = "abc";
}
func();
console.log(value);
```
var没有块级作用域，使用var循环会改变i的原有值  
> 改进：使用let声明块级作用域  
```js
var i = 99;
for(var i = 0; i < 5; ++i) {
    console.log(i);
}
console.log(i)  // i变成了4
```
---
外部引入的js与原有的js在同一个作用域，若xxx文件中修改了a，a就会打印不同结果
```html
<script>
        var a = "abc";
</script>
<script src="xxx"></script>
<script>
    console.log('a :>> ', a);
</script>
```
> 改进：立即执行函数封装  
```js
(function() {
    var a = "abcde";
}.bind(window)());
```
---
const: 常量，但在不同作用域中可以进行改变（重新声明）。  
const声明了一个不可更改指向地址的指针，可以修改内容但不可以修改指向的地址。（若const声明了一个引用类型，那么它的值是可以改的）

```js
const HOST = {
    url: "https://pphui8.me,
    port: 443
}
HOST.port = 80;
console.log(HOST.port); // 已改为80
```
> 改进：Object.freeze(HOST)
```js
const HOST = {
    url: "https://pphui8.me,
    port: 443
}
Object.freeze(HOST);
HOST.port = 80;   // 错误
console.log(HOST.port); // 已改为80
```
---
window全局对象
> 说明：window包含了BOM的一系列方法，但当使用var声明了全局变量时，window将声明的变量作为了window的属性，所以window.screeLeft永远输出88  
> 改进：使用let声明块级变量  
```js
var screenLeft = 88;
console.log('window :>> ', window.screenLeft);
```

## 变量与引用类型
没深讲，不过同C。。

## null : undefined
引用类型的空：null
基本类型的空：undefined

## use strict
```js
"use strict";   // 打开严格模式
web = 123;  // 错误，没有声明
var public = 123;   // 错误，使用了关键字
console.log(web);
```