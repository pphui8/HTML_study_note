## 链接
```js
let nums = [1, 2, 3, 4].join("-");
console.log(nums);  //1-2-3-4
```

## 转换
含有length属性的对象能够被转换为数组
string -> set
```js
let str = "abc";
let chars = str.split("");
let [...chars] = str;
console.log(chars); //[ 'a', 'b', 'c' ]
```

object -> set
```js
let object = {
    0: "abc",
    1: "def",
    length: 2,
}

let nums = Array.from(object);
console.table(nums);  // [ 'abc', 'def' ]
```

## 展开
将数组展开成逗号分隔的元素  
1. 合并数组
```js
let a = ["abc", "def"];
let b = ["ppp"];
console.table([...a, ...b]);
```

2. 复数传参
```js
let a = ["abc", "def"];
let b = ["ppp"];

(function show(...values) {
    for(const i of values) {
        console.log(i);
    }
})(1, 2, 3, 4, 5)
```

## 迭代器
```js
let arr = ["abc", "edf"];
for (const [index, value] of arr.entries()) {
    console.log(index, value);
}
```

## every and some
#### every  
迭代，并执行函数，如果有false则停止迭代并返回  
```js
let arr = ["abc", "edf"];
let res = arr.every(function(value, _index, _arr) {
    console.log(value);
    return true;
})
console.log('res :>> ', res);
```
#### some
只要一个为真即可返回真
```js
let arr = ["abc", "edf"];
let res = arr.some(function(value, _index, _arr) {
    console.log(value);
    return false;
})
console.log('res :>> ', res);
```

## 映射map
对原数组进行操作  
不会改变原来的值  
只会返回新数组  
```js
let arr = ["abc", "edf"];
let res = arr.map(function(value, index, arr) {
    value = `add ${value}`;
    return value;
});
console.log(arr);
console.log(res);
```

## reduce
```js
let arr = ["abc", "edf", "zzz"];
// pre：上一次的返回值
let res = arr.reduce(function(pre, value, _index, _arr) {
    value = `${pre} ${value}`;
    console.log(value);
    return pre + 1;
}, 0);
// 0即pre的第一个值
```