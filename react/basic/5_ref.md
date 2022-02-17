## ref: 注册监听事件时代替#id
> 不要过度使用ref:
> react将监听绑定给了最外侧的根元素，通过事件冒泡调用
> 1. 通过onXxx()绑定事件发生对象
> 2. 通过event.target得到发生事件的事件源

## 字符串形式的ref => 在标签中直接添加```ref="value"```
> 不推荐：执行效率低，并有可能移除  
```jsx
class Demo extends React.Component {
    render() {
        return (
            <div>
                <input type="text" ref="input"/>
                &nbsp;
                <button onClick={this.showData}>oshi</button>
            </div>
        )
    }
    showData = () => {
        // let input = document.getElementById("input");
        // console.log(this);  //refs属性中包含了input...
        let input = this.refs.input;
        // let {input} = this.ref;
        console.log(input);
    }
}
ReactDOM.render(<Demo/>, document.getElementById("test"))
```

## 回调函数 => 直接写匿名函数
```jsx
class Demo extends React.Component {
    render() {
        return (
            <div>
                {/*
                // 内联形式：ref执行了1 + 1次，第一次null，第二次有值
                // 每次执行时react会清空旧的ref并添加新的
                // 一般不影响
                */}
                <input type="text" ref={curNode => {
                    // console.log(node);   node为节点本身
                    this.input = curNode;
                }}/>
                &nbsp;
                <button onClick={this.showData}>oshi</button>
            </div>
        )
    }
    showData = () => {
        console.log(this);
        const {input} = this;
        alert(input.value);
    }
}
ReactDOM.render(<Demo/>, document.getElementById("test"))
```
简写
```jsx
<input type="text" ref={curNode => {
    // console.log(node);   node为节点本身
    this.input = curNode;
}}/>
// 改为
<input type="text" ref={curNode => this.input = curNode} />
```

## 类绑定形式 => 绑定到外部函数
类绑定形式的执行次数只会有一次  
```jsx
class Demo extends React.Component {
    render() {
        return (
            <div>
                <input type="text" ref={this.saveData} />
                &nbsp;
                <button onClick={this.showData}>oshi</button>
            </div>
        )
    }
    showData = () => {
        console.log(this);
        const {input} = this;
        alert(input.value);
    }
    saveData = (curNode) => {
        this.input = curNode;
    }
}
ReactDOM.render(<Demo/>, document.getElementById("test"))
```

## createRef => 把节点放到外面
> 推荐写法  

createRef调用后返回一个容器，存储被ref标识的节点  
createRef只能存放一个节点，再放会覆盖之前的数据  
节点会自动收集到create的变量里面
```jsx
class Demo extends React.Component {
    myRef = React.createRef();
    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} />
                &nbsp;
                <button onClick={this.showData}>oshi</button>
            </div>
        )
    }
    showData = () => {
        console.log(this);
        const input = this.myRef.current;
        console.log(input);
        alert(input.value);
    }
}
ReactDOM.render(<Demo/>, document.getElementById("test"))
```



