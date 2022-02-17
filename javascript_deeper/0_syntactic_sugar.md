6.9


## syntactic_sugar
#### 1. 箭头函数
```js
let fun = function(params){}
//可以缩写成如下 箭头函数会改变this的指向
let fun= params =>{}
//当参数有两个及以上时,如下：
let fun= (params1,params2,,,)=>{}
```

#### 2. 数组解构
```js
let arr = ['a','b','c'];
let {a,b} = arr
console.log(a) // a
//数组解构也允许你跳过你不想用到的值，在对应地方留白即可，举例如下
let {a,,c} = array
console.log(c)  //c
```

#### 3. 拓展运算符
```js
function test() {
  return [...arguments]
}
test('a', 'b', 'c') // ['a','b','c']
//扩展符还可以拼合数组
 let all = ['1',...['2','3'],...['4','5'],'6']   // ["1", "2", "3", "4", "5", "6"]
```

#### 4. 模板字符串
> 也可调用函数
```js
let id = '奋斗中的编程菜鸟'
let blog = '博主id是:${a}' // 博主id是是:奋斗中的编程菜鸟
```

#### 5. 多行字符串
```js
//利用反引号实现多行字符串（虽然回车换行也是同一个字符串）
let poem = `A Pledge
	By heaven,
	I shall love you
	To the end of time!
	Till mountains crumble,
	Streams run dry,
	Thunder rumbles in winter,
	Snow falls in summer,
	And the earth mingles with the sky —
	Not till then will I cease to love you!`
```