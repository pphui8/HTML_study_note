### 命名规范
驼峰命名法

### 函数的参数
函数有参数表自动传入参数
若规定有maxOfList(a, b)，则从前到后依次赋值
```js
function maxOfList() {
    var max = 0;
    console.log('a :>> ', arguments);
    for(i in arguments) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

```

### 预解析
在js运行时，变量声明自动提升到作用域最前。赋值依旧在后
```js
console.log(a); //undefined
var a = 10;
```

> ```var fun = function() { }```  变量fun为函数，但有变量的属性（赋值在后）

### 变量作用域
1. js无块级作用域
2. 在文件中声明的均为全局变量
3. 在函数中不使用 ```var``` 关键字声明的变量为全局变量

### 复杂变量与简单变量
同rust，复杂变量存储方式为指针(stack)->值(heap)

string对象不可修改，故所有会改变值的操作均为 ```新建对象->填入新值->赋值```


### 面向对象
字面量构造法
```js
var 对象 = {
    键: "值"，
}
```

构造函数构造法
```js
function User(name, id) {
    this.name = name;
    this.id = id;
}
```
> 等价于
> ```js
> class User {
>     constructor(name, id) {
>         this.name = name;
>         this.id = id;
>     }
> }
> ```

获取对象的属性:  
1. 对象.属性
2. Object['key']
3. Object.keys(), 返回对象内可枚举属性以及方法名称
4. for( in ) 循环

## 立即执行函数
不需要调用，立即执行   
> 多个立即执行函数要加分号来区分
```js
(function() {})()  //即第二个小括号为调用

;(function(a, b) {
    console.log('object :>> ', object);
})(a, b);

or

(function() {}())  //即第二个小括号为调用

;(function() {
    console.log('object :>> ', object);
}());
```

## 回调函数(手动)
```js
element.addEventListener("click", function(time, callback) {
    // todo
    if(callback) {
        callback();
    }
})
```

## classList
获取元素的类名（可获取多个）
classList.add("name")：添加类名
classList.remove("name")
classList.toggle("name"): 切换，有就删，没有就加上