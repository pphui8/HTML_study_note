## SPA
导航栏 + 页面的直接跳转技术  
1. 单页Web应用
2. 点击页面不会刷新页面，只会局部更新（单页面，多组件）
3. ajax请求获取，在前端异步展现

## 路由
### 前端路由
前端路由通过浏览器的历史为基础视线，浏览器的历史为栈结构，存储再DOM中    
当页面跳转时，先更改path，再跳转到目标页面  
但可以通过history操作实现更改路径但不跳转（更改检测但不作跳转）  

## react-router
> 此库不内置  
有三种：
1. web (react-router-dom)
2. native
3. any

## example
有两种： BrowserRouter 与 HashRouter
1. 引入：
```import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'```
> 可以把BrowserRouter之间环绕到App里

2. 编写路径```<Link to="/xxx">xxx</Link>```

3. 注册路由
```jsx
<Routes>
  <Route path='/xxx' element={<Xxx />} />
</Routes>
```



```jsx
export default class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="nav">
            {/* 使用路由链接实现组件切换 */}
            {/* 小写，不带. */}
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/about">About</Link>
          </div>
          <div className="page">
            {/* 注册路由 */}
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
              </Routes>
          </div>
      </div>
    )
  }
}
```

#### 带有支持高亮的高级Link：NavLink
```jsx
// 通过 activeClassName 指定类名
<NavLink activeClassName="active" className="link" to="/home">Home</NavLink>
<NavLink activeClassName="active" className="link" to="/about">About</NavLink>
```
使用组件封装
定义：
```jsx
// 直接展开             children为标签内容
<Link {...this.props}>{this.props.children}</Link>
```
```jsx
<MyNavLink to="/home">Home</MyNavLink>
<MyNavLink to="/about">About</MyNavLink>
```

## 二级路由
不要这样写，可能导致资源请求错误  
例如通过html请求的样式资源，会请求到错误页面(未找到会自动定向到index.html)  
```<Link className="link" to="/about/home">Home</Link>```  
也可以把html引入改为
```<link href="%PUBLIC_URL%/xxx" rel="stylesheet">```  

#### 嵌套路由
路由的匹配都是从最开始注册的开始的，注册的二级路由要加上上一层的前缀
仍在最外层注册路由  
在内层使用Outlet标签来标记展示区域  
```jsx
export default class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="nav">
            {/* 使用路由链接实现组件切换 */}
            {/* 小写，不带. */}
                <NavLink className="link" to="/home">Home</NavLink>
                <NavLink className="link" to="/about">About</NavLink>
          </div>
          <div className="page">
            {/* 注册路由 */}
              <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />}>
                  <Route path='/about/News' element={<News />} />
                  <Route path='/about/Messages' element={<Messages />} />
                </Route>
              </Routes>
          </div>
      </div>
    )
  }
}
```
```jsx
export default class About extends Component {
  render() {
    return (
      <div>
        <h3>About</h3>
        <NavLink to="/about/News">News</NavLink>
        <NavLink to="/about/Messages">Message</NavLink>
        {/* 使用outlet来指定存放区域 */}
        <div className="value">
          <Outlet />
        </div>
      </div>
    )
  }
}
```
## redirect
同switch中的default，当前面都匹配不上时，匹配redirect  
> Redirect has been removed from v6. You can replace Redirect with Navigate
可用index指定默认路由

```jsx
<Routes>
  <Route path='/home' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route index  element={<Home />} />
</Routes>
```

## 模糊匹配(v6不支持)
路由从前往后匹配，匹配最长  
```jsx
<Link className="link" to="/about">About</Link>
<Route path='/about/a/b' element={<About />} />
```

## 路由组件、一般组件
路由组件可以收到一些默认props（v6版本没有了草）
路由组件存放在pages目录里

## 向路由组件传递参数
### 1. params
声明：
```jsx
<Route path={'/about/Messages/:id/:title'} element={<Messages />} />
```
params:
```jsx
{/* 传参 */}
<Route path={'/about/Messages/9'} element={<Messages />} />
```
声明接收参数(usePara仅限于函数式组件使用)
```jsx
export default function Messages() {
  const param = useParams();
  console.log(param);
  return (
    <div>index</div>
  )
}
```

### 2. 通过search参数传输
> 使用时可以用searchParams.get("id")来获取参数，同时页面内也可以setSearchParams({"id":2})来改变路由  
> 这样当访问 http://URL/user?id=111 时就可以获取和设置路径

```js
<Route path={'/about/Messages'} element={<Messages />} />
```
```js
<NavLink to='/about/Messages?id=9&title=msg'>Message</NavLink>
```
```js
export default function Messages() {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.get('id'))
  return (
    <h3>msg</h3>
  )
}
```

### state参数
> 隐式传输数据
```jsx
<Route path='/about/Messages' element={<Messages />} />
```
```jsx
<NavLink to={`/about/Messages`} state={{id:9, title:'msg'}}></NavLink>
```
```jsx
export default function Messages() {
  const stateParams = useLocation();
  console.log(stateParams.state);
  return (
    <h3>msg</h3>
  )
}
```


## push && replace
默认路由触发push模式，在浏览器按后退时后退(能留下痕迹)  
开启replace:  
```jsx
<NavLink replace to="/about/Messages">Message</NavLink>
```

## 编程式导航
```jsx
this.props.history.push('url')
this.props.history.replace('url')
```

## withRouter
> 已弃用： 使用 useNavigate() 替代

```jsx
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom'

export default function index() {
  const navigate = useNavigate();
  ...
  navigate(`/xxx/xxx/xxx`);
```

适用情况：想在不是路由组件的地方使用一些路由功能(前进、回退等)  
withRouter(elem): 将非路由组件包装为路由组件  
```jsx
class Header ext......

export default useNavigate(Header)  // 无需函数体
```

## BrowserRouter / HashRouter
1. 底层原理不一样，BrowserRouter是HashRouter的封装。HashRouter使用url的哈希值。
2. BrowserRouter无需包含#锚点
3. HashRouter刷新后会导致state参数的丢失
4. Hash可以解决一些路径错误问题(样式丢失)
