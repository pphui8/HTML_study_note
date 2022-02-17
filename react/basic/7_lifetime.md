## 挂载、卸载
当 Clock 组件第一次被渲染到 DOM 中的时候，就为其设置一个计时器。这在 React 中被称为“挂载（mount）”。  

同时，当 DOM 中 Clock 组件被删除的时候，应该清除计时器。这在 React 中被称为“卸载（unmount）”  

我们可以为 class 组件声明一些特殊的方法，当组件挂载或卸载时就会去执行这些方法：
```jsx
componentDidMount() {
    // 组件创建时
}

componentWillUnmount() {
    // 组件即将删除时
    // 若有方法正在运行而直接把组件删除，会报错（例如计时器函数）
}
```
例子：
```jsx
class Demo extends React.Component {
    state = {
        opacity: 1.0,
    }
    render() {
        return (
            <div>
                <h1 style={{opacity: this.state.opacity}}>hello world</h1>
                <button onClick={this.death}>test</button>
            </div>
        )
    }
    death = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("test"));
    }
    componentWillUnmount() {
        // 清除定时器
        clearInterval(this.timer);
    }
    componentDidMount() {
        // 不能写在render()里，更新state会刷新页面，刷新页面会调用render()
        setInterval(() => {
            let opacity = this.state.opacity;
            opacity -= 0.1;
            if(opacity <= 0) {
                opacity = 1;
            }
            // 重名简写
            this.setState({opacity})
        }, 200);
    }
}
ReactDOM.render(<Demo/>, document.getElementById("test"))
```

## 生命周期
组件从创建到删除经历的事件
> 钩子函数：在某些时间点自动调用的函数

## 生命周期中调用的函数及顺序
### 1. 挂载
- <d style="color:pink">constructor()</d>
- static getDerivedStateFromProps()
- <d style="color:red">componentWillMound()</d> （不安全）
- <d style="color:pink">render()</d>
- <d style="color:pink">componentDidMound()</d>

### 2. 更新（new props、setState()）
- static getDerivedStateFromProps() // 若state值任何时候都取决于props
- <d style="color:pink">shouldComponentUpdate()   // 判断是否可以更新</d>
- <d style="color:red">componentWillUpdate() (不安全)</d>
- <d style="color:pink">render()</d>
- getSnapshotBeforeUpdate() // 获取更新之前的信息
- <d style="color:pink">componentDidUpdate()</d>

#### 2.1 强制更新（forceUpdate()）
- static getDerivedStateFromProps()
- <d style="color:red">componentWillUpdate() (不安全)</d>
- <d style="color:pink">render()</d>
- getSnapshotBeforeUpdate()
- <d style="color:pink">componentDidUpdate()</d>

### 卸载
- <d style="color:pink">componentWillUnmount()</d>


### 函数的细节
getSnapshotBeforeUpdate();  
在更新之前捕获一些信息，传给did update

componentDidUpdate(preProps, preState);

使用例：
```jsx
class Demo extends React.Component {
    state = {
        newsArr: []
    }
    componentDidMount() {
        setInterval(() => {
            const {newsArr} = this.state;
            const news = "新闻" + (newsArr.length + 1);
            this.setState({newsArr: [news, ...newsArr]})
        }, 1000);
    }
    // 返回之前的list高度
    getSnapshotBeforeUpdate() {
        return this.refs.list.scrollHeight;
    }
    // 设置list高度，使其不随意滑动
    componentDidUpdate(preProps, preState, height) {
        this.refs.list.scrollTop += this.refs.list.scrollHeight - height;
    }
    render() {
        return (
            <div className="list" ref="list">
                {
                    this.state.newsArr.map((news, index) => {
                        return <div className="news" key={index}>{news}</div>
                    })
                }
            </div>
        )
    }
}
ReactDOM.render(<Demo/>, document.getElementById("test"))
```


## 常用的钩子函数
1. render: 初始化使用
2. componentDidUpdate
3. componentWillUnmount