## setState
setState可以传输一个函数  
setState引起的后续动作(如渲染)时异步的  

#### 1. setState有一个回调函数，在处理完时调用  
```jsx
this.setState({count: count + 1}, () => {
    console.log(count);
});
```

#### 2. 函数式(依赖于原状态的话会方便一点)  
参数为state与props，要返回一个对象(state)
```jsx
add = () => {
    const { count } = this.state;
    this.setState((_state, _props) => {
        return ({count: count + 1})
    }, () => {
        console.log(this.state.count);
    })
}
```

## lazyLoad
一般组件、路由组件都可以懒加载  
#### 1. 路由组件
1. 修改组件引入
```jsx
import React, { Component, lazy, Suspense } from 'react'
const Home = lazy(() => {import ('./Home')})
```

2. 修改路由的注册，使用Suspense包裹
fallback中指定加载时的占位符，一般写个```<h1>Loading...</h1>```
```jsx
<Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />}>
            <Route path='/about/News' element={<News />} />
            <Route path='/about/Messages' element={<Messages />} />
        </Route>
    </Routes>
<Suspense/>
```

## Fragment()
空标签，这个标签不会被渲染  
用于包裹返回标签  
```jsx
import React, { Fragment } from 'react'
export default function Count() {
    return (
        <Fragment>
            Count!!!!
        </Fragment>
    )
}
```

## Context
组件间的通信方式，适合组组件与后代组件的通信  
父 -> 子(跳过) -> 孙，不用逐层传输props  

DOM结构
> ```jsx
> <A>
>   <B>
>       <C />
>   </B>
> </A>
函数：
```jsx
import React from 'react'
const MyContext = React.createContext();
export default function A() {
    const { Provider } = MyContext;
    return (
        <div>
            <Provider value='message from a'>
                <B />
            </Provider>
        </div>
    )
}
function B() {
    return (
        <div>
            <C />
        </div>
    )
}
function C() {
    // 要的话通过函数申请
    let text = React.useContext(MyContext)
    console.log(text);
    return (
        <div>C</div>
    )
}
```

类：
```jsx
// 创建与函数相同
// 接收
class C extends Component {
    static providerType = MyContext;
    render() {
        console.log(this.context);
        return (
            <div>C</div>
        )
    }
}
```

第三种方法(都可以使用)
```jsx
function C() {
    const { Consumer } = MyContext;
    return (
        <div>
            <Consumer>
                {
                    value => {
                        return `${value}`
                    }
                }
            </Consumer>
        </div>
    )
}
```

## 组件优化
1. 只要执行setState()，组件重新render()
2. 只要当前组件render()，那么子组件也会render()

只有需要更新数据、重新渲染时调用render()  
> 原因：Cpomenet中的shouldComponentUpdate总是返回true  

下一个数据：
```shouldComponentUpdate(nextProps, nextState)```
当前的数据：
```this.props, this.state```

比较后返回需要更新组件的状态即可
```jsx
// 只有xxx不一样的时候才更新
shouldComponentUpdate(nextProps, nextState) {
    return !this.state.xxx === nextState.xxx
}
```

### PureComponent
自动判断是否需要更新  
自动比较，但是是浅比较(只比较地址)  
使用原则：不与原obj发生关系的