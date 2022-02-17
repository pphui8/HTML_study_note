## 非受控组件
1. 非受控组件将数据存储在DOM中，而不是组件内，这比较类似于传统的HTML表单元素。
2. 非受控组件的值不受组件自身的state和props控制
3. 非受控组件使用ref从DOM中获取元素数据

```jsx
class Demo extends React.Component {
    handleSub = (event) => {
            event.preventDefault(); // 阻止提交
            const {username, password} = this;
            alert(`${username.value}, ${password.value}`);
        }
    render() {
        return (
            <form action="https://pphui8.me" onSubmit={this.handleSub}>
                用户名: <input ref={c => this.username = c} type="text" name="username" /><br />
                密码: <input ref={c => this.password = c}  type="text" name="password" /><br />
                <button>提交</button>
            </form>
        )
    }
}
ReactDOM.render(<Demo/>, document.getElementById("test"))
```


## 受控组件
1. 受控组件通过props获取其当前值，并通过回调函数(比如onChange)通知变化
2. 表单状态发生变化时，都会通知React，将状态交给React进行处理，比如可以使用useState存储
3. 受控组件中，组件渲染出的状态与它的value或checked属性相对应
4. 受控组件会更新state的流程

```jsx
class Demo extends React.Component {
    // 初始化状态
    state = {
        username: '',
        password: ''
    }
    saveUsername = (event) => {
        this.setState({username: event.target.value})
    }
    savePassword = (event) => {
        this.setState({password: event.target.value})
    }
    handleSub = (event) => {
        event.preventDefault(); // 阻止提交
        const {username, password} = this.state;
        alert(`${username}, ${password}`);
    }
    render() {
        return (
            <form action="https://pphui8.me" onSubmit={this.handleSub}>
                用户名: <input onChange={this.saveUsername} type="text" name="username" /><br />
                密码: <input onChange={this.savePassword} type="text" name="password" /><br />
                <button>提交</button>
            </form>
        )
    }
}
ReactDOM.render(<Demo/>, document.getElementById("test"))
```

## 使用高阶函数精简代码
> 高阶函数
> 1. 若函数接收的参数为函数
> 2. 若返回值为函数

```jsx
class Demo extends React.Component {
    // 初始化状态
    state = {
        username: '',
        password: ''
    }
    saveData = (keyValue) => {
        return (event) => {
            // keyValue在类中默认是一个字符串，用中括号取值
            /*
                let a = "name";
                let obj = {};
                // obj.a = "tom";  // { a: 'tom' }
                obj[a] = "tom";
                console.log(obj);
            */
            this.setState({[keyValue]: event.target.value});
        }
    }
    handleSub = (event) => {
        event.preventDefault(); // 阻止提交
        const {username, password} = this.state;
        alert(`${username}, ${password}`);
    }
    render() {
        return (
            <form action="https://pphui8.me" onSubmit={this.handleSub}>
                用户名: <input onChange={this.saveData("username")} type="text" name="username" /><br />
                密码: <input onChange={this.saveData("password")} type="text" name="password" /><br />
                <button>提交</button>
            </form>
        )
    }
}
ReactDOM.render(<Demo/>, document.getElementById("test"))
```

## 函数的柯里化
> 通过函数调用返回函数的形式，实现多次接收参数后统一处理的函数编码形式  
> 参数无法统一接收时使用  

```js
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1, 2, 3));
```

改为：
```js
function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
console.log(sum(1)(2)(3));
```

## 上例中不使用高阶函数接收参数
> 直接返回一个回调用的匿名函数，函数中调用外部函数  

```jsx
class Demo extends React.Component {
    // 初始化状态
    state = {
        username: '',
        password: ''
    }
    saveData = (keyValue, event) => {
        this.setState({[keyValue]: event.target.value});
    }
    handleSub = (event) => {
        event.preventDefault(); // 阻止提交
        const {username, password} = this.state;
        alert(`${username}, ${password}`);
    }
    render() {
        return (
            <form action="https://pphui8.me" onSubmit={this.handleSub}>
                用户名: <input onChange={event => this.saveData("username", event)} type="text" name="username" /><br />
                密码: <input onChange={event => this.saveData("password", event)} type="text" name="password" /><br />
                <button>提交</button>
            </form>
        )
    }
}
ReactDOM.render(<Demo/>, document.getElementById("test"))
```
