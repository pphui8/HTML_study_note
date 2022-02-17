## 设置主键值，使其永远不会重复
> 防止存储时重名（类似uuid）  
> 类中的symbol默认隐藏（私有）

```js
let str1 = Symbol(1);
let str2 = Symbol(2);
console.log(str1 == str2);  // false
```

使用for()，先查看是否存在，存在就不新创建
```js
let str1 = Symbol.for("str1");
let str2 = Symbol.for("str2");
console.log(str1 == str2);  // true
```

设置可重复键值
```js
let user1 = {
    name: "张三",
    key: Symbol()
};
let user2 = {
    name = "张三",
    key: Symbol()
};

let grade = {
    [user1.key]: {js: 100, css: 100},
    [user2.key]: {js: 22, css: 22}
}
```