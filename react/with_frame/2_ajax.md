## react ajax
1. jQuery: 不建议
2. axios：建议

## 跨域问题
Ajax阻止了流量的返回（发送是成功了的）  

#### 解决：代理（中间人）  
中间人的ip、端口为

> 在package.json文件最后一行加上  
> ```"proxy": "http://> localhost:9000"```  
> 不用加路径  
> 客户端只用发给本端口即可  

### 发生了什么：
先在3000端口找看有没有，然后转发去目的端口(9000)，找  
所以当链接```http://localhost:3000/index.html```会返回public中的index.html  

## 改进：(不要3000没有就去9000) > 配置多个代理
不在package,json中配置  
setupProxy要使用cjs而不是es6语法  
1. 在src中添加setupProxy.js
2. 
```js
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        // 设置转发路径
        proxy('api1', {
            target: 'http://localhost:9000',
            // 换源，服务器收到的请求也来自target的端口
            changeOrigin: true,
            // 替换api1为空字符串
            pathRewrite:{'^/api1': ''}
        }),
        proxy('api2', {
            target: 'http://localhost:9002',
            changeOrigin: true,
            // 替换api1为空字符串
            pathRewrite:{'^/api1': ''}
        })
    )
}
```

```jsx
axios.get('http://127.0.0.1:3000/api1/stus').then(
```


## 服务器(express)
```js
const express = require('express');
const app = express()

app.use((_req, _resp, next) => {
    console.log('conneted');
    next();
})

app.get('/stus', (_req, resp) => {
    const students = [
        {id: '001', name: 'tom', age: 18},
        {id: '002', name: 'july', age: 19},
        {id: '003', name: 'mark', age: 17}
    ]
    resp.send(students)
})

app.listen(9000, (err) => {
    if(!err) {
        console.log('启动成功');
    }
})
```


