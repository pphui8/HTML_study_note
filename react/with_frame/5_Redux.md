## redux
用于状态管理的JS库，集中管理React多个组件的共享状态  
使用原则：能不用就不用  

## redux原理
![原理图](https://img-blog.csdnimg.cn/20210418003347155.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1BlbmdQZW5nMTAyMA==,size_16,color_FFFFFF,t_70#pic_center)  

组件 通知 活动工厂 传输给 存储 设置 Reducers 处理后 传回存储

三大核心概念
#### 1. action  
1. 动作的对象
2. 包含
> - type: 标识 
> - data: 数据

#### 2. reducer
1. 初始化状态、加工状态
2. 使用旧的state和action，产生新的state

#### 3. store
1. 联系state, action, reducer

## redux的改变不会引起组件的更新，要手动更新
有性能问题
```jsx
componentDidMount() {
    // 当store更新时调用
    store.subscribe(() => {
    //   this.render();// 无效
    this.setState({});
    })
}
```

修改index.jsx, 直接监听redux的变化
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import App from './App'


ReactDOM.render(<App />, document.getElementById('root'));

store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
})
```

## 使用步骤
### 精简版
1. src下建立
    - src
        - redux
            - store.js
            - count_reducer.js

2. store.js
- 引入createStore函数
- 传入为其服务的reducer
- 暴露store对象

3. count_reducer.js
- 本质为一个函数，处理perState与data
- 功能1. 初始化， 2. 加工
- store会自动调用初始化，传递
    - preState: undefined
    - action: {type: '@@REDUX/INIT'}
- 暴露函数对象 

4. 在index.jsx监听store的变化，一旦变化重新渲染页面

### 完全版
增加了
1. constant.js
用于枚举match对应的对象
2. count_action.js
用于统一创建action对象,为异步做准备

## 异步版
action不仅可以是对象,还可以是函数. 异步的redux必须使用函数  
> 异步延迟的操作不想交给组件,而是自己来处理  
1. 下载中间件 redux-thunk 用于指定action的函数
2. store中引入
```jsx
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
```
3. 写返回函数的异步action
```jsx
export const createSumAsyncAction = (data, time) => {
    return () => {
        setTimeout(() => {
            // store.dispatch({
            //     type: SUM,
            //     data
            // })
            // 或直接调用SUM函数
            store.dispatch(createSumAction(data));
        }, time)
    }
}
```

## 插件版:react-redux
> 1. 自带更新渲染,不用手动开了  
> 2. Provider组件,为组件自动提供state  
> 3. 把需要容器的组件直接放在containers里

![模型图](https://img-blog.csdnimg.cn/20210510124058586.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NzgzNjYw,size_16,color_FFFFFF,t_70)

1. 引入UI: 直接引入
```jsx
// src\containers\Count\index.jsx
import CountUI from '../../components/Count'
```

2. 引入store: 需要从上层props引入
```jsx
// src\App.jsx
import store from './redux/store'
<Count store={store} />
```

### 步骤
1. 创建容器组件(/containers/xxx)
connect(mapStateToProps, mapDispatchToProps)(CountUI)
    - mapStateToProps: 返回状态对象
    - mapDispatchToProps返回操作状态的方法
2. 通过props传入state

## 文件规划
```
src
    - redux
        - atcions
            - action1
                - index.jsx
            - action2
                - index.jsx
        - reducers
            - reducer1
                - index.js
```

## 使用多个redux时
```combineReducers```
```jsx
const allReducer = combineReducers({
    sum: countRedicer,
    person: personReducer,
})

export default createStore(allReducer, applyMiddleware(thunk))
```

## 纯函数
> 一类特殊的函数，同样的输入必定对应同样的输出
约束  
1. 不得改写参数数据
2. 无任何副操作：如网络请求、输入输出
3. 不能使用Math.random(), Date.now()等函数

redux的reducer是一个纯函数