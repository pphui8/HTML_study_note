## 特点
值不能重复

## 比较
对象：  
```js
// 只保留了"123"，因为类会将键转为 string 类型
let obj = {
    123: "abc",
    "123": "def",
};
console.log(obj); // { '123': 'def' }
```

## weakset > 弱引用对象数组
> 值必须是引用类型  

### 引用gc
一块内存可以有多个引用  
删除引用不会直接删除指向的对象  
对象没有引用时被自动回收  
```js
let obj = {
    123: "abc",
    "123": "def",
};
let obj2 = obj;
obj2 = null;
console.log(obj);   // 正常输出，obj仍有被引用
obj = null;
console.log(obj);   // null，obj已经被回收
```
