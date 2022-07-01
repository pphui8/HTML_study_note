## ts 与 js
1. 变量类型
2. ES与ES新特性
> 即使 ts 报错，但仍会编译出相应 js 代码

### 类型
语法：
```ts
// 普通变量
let a: number = 10;

// 函数
function sum(a: number, b: number): number {
  return a + b;
}
// result 被自动推断为 number
let result = sum(123, 456);
```

#### 类型：
| 类型 | 描述 |
| :-----| ----: |
| number | 数字 |
| string | 字符串 |
| boolean | 布尔 |
| 字面量 | 该字面量的值 |
| any | 任意类型 |
| unknown | 类型安全的任意类型 |
| void | 没有值 |
| never | 不能是任何值 |
| object | 对象 |
| array | 数组 |
| tuple | 元组 |
| enum | 枚举 |

---

### 类型的高级用法
```ts
// 直接使用字面量进行类型声明
let a: 10;
a = 10; // 只能赋值为10

// 声明联合类型
let gender: 'male' | 'female';
let a: boolean | string;
let a: 10 | 20;
// 也有且的用法
let j: { name: string } & { age: number};
j = {
  name: 'abc',
  age: 10,
};

// 声明为 any，相当于关闭了 ts 的类型检查
let a: any = 10;
// 声明变量时不指定类型，会隐式使用 any 类型推定
let d;
d = 10;
d = "abc";
d = true;

// 类似 any，但不会嚯嚯其它的变量
let e: unknown;
e = 10;
e = 'hello';
e = true;

let s: string;
s = d;  // 编译通过，any 赋值时也会关闭 s 的类型检查
console.log(typeof(s)); // boolean
s = e;  // 编译未通过，类型未知就不能赋值

// 真要赋值时可以
if(typeof e === "string") {
  s = e;
}
// 或者使用类型断言
s = e as string;
s = <string>e;
```

---

#### 关于 void 与 never
```ts
// void | never
// 多用于声明函数的返回值
// void 是返回空值
function fn(): void {
  return;
  // return null;
}
//never 表示永远不会返回结果
function fn(): never {
    throw new Error("error");
}
```

---

对象与函数类型
```ts
// object
let b: object;
// 在实际使用中，我们一般不直接限制一个变量是对象，而是限制对象中包含某个属性
let b: {name: string};  // 要求对象结构完全相等
b = {name: 'abc'};
// 不完全相等报错
// let B: b = {name: 'abc', age: 10}; // 报错

// 添加问号表示可选
let b: {name: string, age?: number};
b = {name: 'abc', age: 10};
b = {name: 'abc'};

// 表示除了 name 其它不作限制
// [propName: string]: any 可以包含任意的 string 类型的值（数组）
let b: {name: string, [propName: string]: any};
b = {name: 'abc', a: 1, b: true};

// 函数同理，限制函数的参数与返回值类型而不是限制它是一个函数
let fn: Function;
// 使用箭头函数限制函数结构
let sum: (a: number, b: number) => number;
sum = function(a: number, b: number): number {
  return a + b;
}
```

---

#### 数组
```ts
// 同上，一般是限制数组值的类型而不是限制它是一个数组
let week: string[];
let nums: number[];
// 或
let a: Array<number>;
```

---

#### 元组（tuple）
> 固定长度的数组（执行效率高）
```ts
let h: [string, string];
h = ['hello', 'world'];
```
---

#### 类型别名
> 给自定义类型起名
```ts
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType = 3;
```
