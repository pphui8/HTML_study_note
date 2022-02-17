## 库
https://unpkg.com/  

## what is react
>  用于构建用户界面的js库
1. 发送请求获取数据
2. 处理数据
3. 操作DOM呈现页面

#### 优势：
1. 比原生DOM-API执行效率高
2. 原生DOM浏览器会进行大量重绘
3. 代码复用率低
4. 使用虚拟DOM，不用直接对显示出来的数据操作，加速页面渲染效率
5. 使用jsx（可选）, Babel 可以将 ES6 代码转为 ES5 代码，这样我们就能在目前不支持 ES6 浏览器上执行 React 代码。Babel 内嵌了对 JSX 的支持。通过将 Babel 和 babel-sublime 包（package）一同使用可以让源码的语法渲染上升到一个全新的水平。

数据 -> 虚拟DOM -> 真实DOM

## 使用非jsx的方式创建jsx(不是很方便欸)
```js
const VDSM = React.createElement("h1", {id: "title"}, "hello react")
ReactDOM.render(VDSM, document.getElementById("#test"))
```

## ```onClick={this.func}``` 与 ```onClick={this.func()}```
```onClick={this.func}```  将 ```func()``` 作为 ```onClick()``` 的回调，点击元素时发生调用  
<br>
```onClick={this.func()}``` 将 ```func()``` 的<b>返回值</b>作为 ```onClick()``` 的回调
> 若需要调用函数时接收参数

## 解决法
返回需要运行的匿名函数  

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
