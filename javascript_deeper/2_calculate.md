## 短路运算符
完成赋值  
```js
function add(a, b) {
    // 注意判断值放在前，默认值在后
    a = a || 0;
    b = b || 0;
    return a + b;
}
```
## goto
```js
label: for(let i = 0; i < 5; ++i) {
    if(i == 3) continue label;
}
```

## for..in.. and for..of..
```js
let article = [
    { title: "abc", text: "def"},
    { title: "qwe", text: "asd"},
]
// i 为index而非value
for(let i in article) {
    console.log('i :>> ', article[i]);
}
// value为值（主要用于可迭代对象）
for(let value of article) {
    console.log('value :>> ', value);
}
```
