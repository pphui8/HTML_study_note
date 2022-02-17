## 基本类型
关键字： typeof, instanceof
> typeof 将数组判断为object，instanceof从原型链判断出为array

## 转义字符
```js
let a = "abc";
let b = "edf";
let fill = "mm"
console.log(a + "mm\
\
mm"+ b);
console.log(`${a}mm
mm${b}`);
/*
abcmmmmedf
abcmm
mmedf
*/
```

## 标签模板
```js
let fill1 = "abc";
let fill2 = "def";

// 调用时不需加括号
let res = link`
    <li>these are fiils: ${fill1} </li>
    <li>these are fiils: ${fill2} </li>`;
console.log('res :>> ', res);


// strings获取了原字符串，fills获取了模板字符串
function link(strings, ...fills) {
    return strings.map((str, key) => {
        console.log('str, key :>> ', str, fills[key]);
        return str + (fills[key] ? `<a>` + fills[key] +  `</a>` : "no value!!");
    }).join()
}
```

## 字符串截取
```js
let str = "abcdefghijkl";
console.log(str.slice(0, 1));   //a
console.log(str.slice(-2, -1)); //k
```

## 字符串检索
```js
let str = "abcdefghijkl";
console.log(str.indexOf("cde"));   //2
console.log(str.includes("cde")); //true
const keyWord = ["abc", "ijk"];
const func = keyWord.some(word => {
    return str.includes(word);
})
if(func) {
    console.log("str constains these words");
}
```

## bool隐式转换
```js
let a = 99;
// 可以使用Boolean()来检查转换结果
console.log(Boolean(a));
if(a) console.log("true");
```

## bool显示转换
> Boolean()，或：  

```number = !!number```  
> 执行步骤：
> 1. number 转换为 bool
> 2. bool 取反
> 3. bool 再取反