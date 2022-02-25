## 搭建本地开发环境
1. install node.js
2. 创建项目并启动
> 第一步，全局安装：npm i -g create-react-app  
> 第二步，切换到想创项目的目录，使用命令：create-react-app hello-react  
> 第三步，进入项目文件夹：cd hello-react  
> 第四步，启动项目：npm start  

## 项目结构
#### <d style="color:pink">public ---- 静态资源文件夹</d>: 图片、html等
- favicon.icon ------ 网站页签图标
- <d style="color:pink">index.html -------- 主页面
- logo192.png ------- logo图
- logo512.png ------- logo图
- manifest.json ----- 应用加壳的配置文件
- robots.txt -------- 爬虫协议文件
  
#### <d style="color:pink">src ---- 源码文件夹  
- <d style="color:pink">App.js --------- App组件  
- <d style="color:pink">App.css -------- App组件的样式  
- App.test.js ---- 用于给App做测试  
- <d style="color:pink">index.css ------ 通用的样式  
> 可以放入public/css/index.css
> 但需要删除入口文件(index.js)的引入

- <d style="color:pink">index.js ------- 入口文件  
- logo.svg ------- logo图
- reportWebVitals.js  --- 页面性能分析文件(需要web-vitals库的支持)
- setupTests.js  ---- 组件单元测试的文件(需要jest-dom库的支持)

## 执行顺序
1. ```src/index.js``` , 在 ```render()``` 中找到root
2. 在 ```public/index.html``` 中找到对应的root，渲染
3. 渲染组件App，找到 ```App.js```

#### 一般需要编写的文件
1. public/index.html
2. src/App.js
3. src/index.js

## 区分组件和一般的js文件
1. 组件首字母大写
2. 改为.jsx文件

## css文件模块化
模块化后可以：
1. ```import xxx from './xxx.model.css``` 使用变量接住导入的文件
2. ```className={xxx.xxx}``` 来指定使用某个包的某个样式

模块化方法：  
命名 xxx.model.css

## 组件间的消息传递
### 1. 父传子：props
通过pros来传递参数
父：
```jsx
export default class App extends Component {
  state = {todos: [
    {id: 1, todo: "chifan", isDone: true},
    {id: 2, todo: "shuijiao", isDone: false}
  ]}
  render() {
    const {todos} = this.state;
    return (
          <List todos={todos}/>
    )
  }
}
```
子：
```jsx
export default class List extends Component {
    render() {
        const {todos} = this.props;
    }
}
```

### 子传父
父通过props将一个箭头函数传给子，传信息时调用该函数传入参数即可
> 箭头指向了父组件  


### 兄弟之间：消息订阅、发布机制（PubSubJS）
先订阅消息(指定收什么)，当消息发布时自动调用回调函数  
发布:
```js
PubSub.publish('state', {
  users: response.data.items,
  isLoading: false
})
```
接收:
```js
PubSub.subscribe('state', (_msg, data) => {
  this.setState(data);
})
```

## uuid库
nanoid

## 内置网络库 fetch， promise风格
```js
fetch(url, opstions).then(
  response => {
    // response中存储了返回的状态，没有返回的值
    return response.json();   // 返回返回值
  },
  err => {
    // 联系服务器失败
    // 返回一个初始化状态的Promise实例
    return new Promise(()=>{});
  }
).then(
  response => {
    // 此response中存储了返回值
  },
  err => {

  }
)
```

优化
```js
fetch(url, opstions).then(
  response => {
    // response中存储了返回的状态，没有返回的值
    return response.json();   // 返回返回值
  }
).then(
  response => {
    // 此response中存储了返回值
  }
).catch(
  err => {
    // 统一的错误处理
  }
)
```
再优化
```js
try {
  // 联系服务器
  const response = await fetch(url, opstions);
  // 解析结果
  const data = await response.json();
} catch {
  // 错误处理
}
)