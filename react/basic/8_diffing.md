## diffing算法
React在加载新内容时，会保留已存在的组件，只更改有改变的组件  
例如：时间改变，但h1、input等没有改变的都没有重新加载
```jsx
class Demo extends React.Component {
    state = {
        Date: new Date()
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({Date: new Date()})
        }, 1000)
    }
    render() {
        return (
            <div>
                <h1>hello world!</h1>
                <input type="text" name="" id="" /><br />
                <span>{this.state.Date.toTimeString()}</span>
            </div>
        )
    }
}
ReactDOM.render(<Demo/>, document.getElementById("test"))
```

## react中的key
#### 运行逻辑：  
数据：
```js
    {"username": "wang", "age": 18, gender: "man"},
    {"username": "li", "age": 20, gender: "woman"}
```
虚拟DOM：
```html
    <li key=0>wang</li>
    <li key=1>li</li>
```
更新后的数据：
```js
    {"username": "huang", "age": 22, gender: "man"},
    {"username": "wang", "age": 18, gender: "man"},
    {"username": "li", "age": 20, gender: "woman"}  
```
<d style="color:red">更新后的数据：</d>
> wang 对应的不是0了  

```html
    <li key=0>huang</li>
    <li key=1>wang</li>
    <li key=2>li</li>
```
> 问题：
> 更新后的数据中 key 与 DOM内容不匹配  
> 故编译器不认为是同一个内容  
> 每次添加都会刷新所有的列表元素  


样例：
```jsx
class Demo extends React.Component {
    state = {
        persons: [
            {"username": "wang", "age": 18, gender: "man"},
            {"username": "li", "age": 20, gender: "woman"}
        ]
    }
    render() {
        return (
            <div>
                <button onClick={this.update}>add one</button>
                <ul>
                    {
                        this.state.persons.map((persons, index) => {
                            return <li key={index}>{persons.username}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    update = () => {
        const {persons} = this.state;
        const newp = {id: persons.length + 1, username: "huang",age: 22};
        this.setState({persons: [newp, ...persons]})
    }
}
ReactDOM.render(<Demo/>, document.getElementById("test"))
```

### 原理：
#### 1. 虚拟DOM中key的作用
1. key是虚拟DOM对象的标识，在更新显示时起重要作用
2. 状态变化时：
> 1. 生成新的虚拟DOM，与旧的进行比较
> 2. 若key相同，内容相同，则不变。内容不同，则生成真实DOM并替换
> 3. 若key不同，则生成真实DOM并替换

#### 2. 使用index作为key的问题
1. 逆序添加、删除导致执行效率降低
2. 包含输入等：导致界面信息错位
3. 仅展示信息：没问题（但效率低）

##### 解决办法
uuid: 给它一个唯一的标识作为key
```jsx
class Demo extends React.Component {
    state = {
        persons: [
            {"id": uuid(), "username": "wang", "age": 18, gender: "man"},
            {"id": uuid(), "username": "li", "age": 20, gender: "woman"}
        ]
    }
    render() {
        return (
            <div>
                <button onClick={this.update}>add one</button>
                <ul>
                    {
                        this.state.persons.map((persons) => {
                            return <li key={persons.id}>{persons.username} <input type="text" /></li>
                        })
                    }
                </ul>
            </div>
        )
    }
    update = () => {
        const {persons} = this.state;
        const newp = {id: 3, gender: "man", username: "huang",age: 22};
        this.setState({persons: [newp, ...persons]})
    }
}
ReactDOM.render(<Demo/>, document.getElementById("test"))
```


