## 什么是虚拟DOM
1. DOM是一个Object一般对象
2. 虚拟DOM属性较少，没有真实DOM那么多
3. 虚拟DOM最终会转换为真实DOM

## 什么是JSX
JSX是 javascript XML

语法：
1. 变量使用花括号而非引号  

> 花括号内可以写表达式  
> 产生返回值的指令


```jsx
const VDOM = (
    // 使用花括号而非引号
    <h2 id={myID}>
        <span>{myData}</span>
    </h2>
);
```

2. class使用className
```jsx
const VDOM = (
    // 使用花括号而非引号
    <h2 id={myID} className="title">
        <span>{myData}</span>
    </h2>
);
```

3. 内联style使用双花括号
```jsx
const VDOM = (
    // 使用花括号而非引号
    <h2 id={myID} className="title">
        <span style={{color: `pink`}}>{myData}</span>
    </h2>
);
```

4. 虚拟DOM只能有一个根DOM

## 编程思想：面向组件编程
浏览器插件：React Developer Tools (facebook)


#### 创建组件 (```<demo>自定义组件</demo>```)
##### 1. 创建函数式的组件（简单组件）
```jsx
// 首字母要大写：自定义组件规则
// 返回组件
function Demo() {
    console.log(this);  //undefinied, babel开启了严格模式
    return <h1>hello world!</h1>;
}

// 添加是要写为xml样式（使用组件）
ReactDOM.render(<Demo/>, document.getElementById("test"));
/*
    1. Reac解析组件标签，找到test组件
    2. 发现组件是函数定义的，调用函数，使用返回的虚拟DOM渲染
*/
```

##### 2. 创建类式的组件（复杂组件：有状态的state）
1. 必须继承React.Component
2. 必须视线render()方法
3. 构造器不是必须
```jsx
// 编写构造器组件
class Demo extends React.Component {
    // 无需构造器
    render() {
        return <h2>hello world!</h2>
    }
    ReactDOM.render(<Demo/>, document.getElementById("test"));
    /*
        1. 解析标签，找到Demo标签
        2. 发现Demo是类定义的，先实例化对象，再调用render()方法得到返回值
        3. 渲染
    */
}
```





