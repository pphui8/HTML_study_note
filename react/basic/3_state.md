## 三大属性
## state
```jsx
// 编写构造器组件
class Demo extends React.Component {
    // 构造器被调用了： 1次
    constructor(props) {
        super(props);
        this.state = {
            weather: "hare"
        }
        // bind: 返回一个新函数
        // 自身生成了新的方法，而忽略了原型链上原来的方法
        // 解决调用时this指向的实例问题
        this.func = this.func.bind(this);
    }
    // render被调用：1 + n次（每次状态更新调用）
    render() {
        // render()中this指的是组件实例化对象
        const {weather} = this.state;
        // react重写了许多函数，并使用了驼峰命名
        // 调用时注意时this.func，这样才能调用可以使用实例对象的方法
        return <h2 onClick={this.func}>hello world! today`s weather is {weather}</h2>
    }
    func() {
        // this.state = { weather: "kemuri" } //undefined 错误
        // 这样是通过onClick()回调调用的函数
        // 由于不是通过实例调用得func,this没有获取到实例对象（严格模式）
        // 在构造函数中添加
        let weather = this.state.weather;
        console.log(weather);
        if(weather == "hare") {
            // 错误的写法
            // this.state.weather = "kemuri";
            this.setState({ weather: "kemuri" })
        } else {
            // 此操作为合并，而非替换
            // 不影响其它属性
            this.setState({ weather: "hare" })
        }
    }
}
/*
state: 三大属性之一
原因：在更新时自动调用render()刷新页面，不能直接修改，修改时合并而非替换
*/

ReactDOM.render(<Demo/>, document.getElementById("test"));
```

### 语法糖：
##### 1. react实例化类的时候并不能获得实例的对象  
这样实例的：
```ReactDOM.render(<Demo/>, document.getElementById("test"));```  
所以类中的方法并不是以实例调用而是事件的回调时调用的

##### 2. 

```jsx
class Demo extends React.Component {
    // 改一
    // 不能用let
    state = { weather: "hare" };

    constructor(props) {
        super(props);
        // this.state = { weather: "hare" } > 改在： 改一
        // this.func = this.func.bind(this); > 改二

    }
    render() {
        const {weather} = this.state;
        return <h2 onClick={this.func}>hello world! today`s weather is {weather}</h2>
    }
    // 改二
    // 使用赋值语句 + 箭头函数
    // func() {
    func = () => {
        // 自动找到外层函数的this作为this使用
        let weather = this.state.weather;
        console.log(weather);
        if(weather == "hare") {
            this.setState({ weather: "kemuri" })
        } else {
            this.setState({ weather: "hare" })
        }
    }
}

ReactDOM.render(<Demo/>, document.getElementById("test"));
```