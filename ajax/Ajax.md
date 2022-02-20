## Aja
> AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）

作用：在不刷新页面的前提下，向后台提交数据
在浏览页面时不一次加载所有元素，而是看到多少加载多少  
缺点：
1. 不能回退
2. 存在跨域问题
3. SEO不友好

## 格式

#### 请求报文
```
1. 行 
类型     url        版本
GET    s?ieutf-8  HTTP/1.1

2. 头
Host: 
Cookie: 
Content-type: 
.......


3. 空行
4. 体
username=admin......
```

> GET请求中请求体为空
#### 响应报文
```
1. 行 
版本      状态码     状态字符串
HTTP/1.1  200         OK

2. 头
同请求报文

3. 空行
4. 体
返回的结果
```

## 简易的服务端框架
1. install nodejs
2. ```npm init --yes```
3. ```npm i express```
4. ./Test/server.js
```js
// 引入express
import { request } from 'express';
import express from 'express';

// 创建应用对象
const app = express();

// 创建路由规则
app.get('/', (request, response) => {
    response.send("hello world!");
})

// 监听端口
app.listen(8000, () => {
    cconsole.log("终端已启动，监听中....");
})
```
5. node运行
6. 浏览器打开```ip:8000```

## xhr对象的5个状态
- 0（未初始化）还没有调用open()方法
- 1（载入）已调用send()方法，正在发送请求
- 2(载入完成)send()方法完成，已收到全部响应内容
- 3(解析)正在解析响应内容
- 4（完成）响应内容解析完成，可以再客户端使用了


## Ajax案例
服务端
```js

```

客户端(Ajax)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #result {
            width: 200px;
            height: 200px;
            border: 1px solid grey;
            background-color: #39c5bb;
        }
    </style>
</head>
<body>
    <button onclick="requset()">点击发送请求</button>
    <div id="result"></div>
    <script>
        function requset() {
            // 创建对象 (XHR指Ajax)
            const xhr = new XMLHttpRequest();
            // 初始化 设置请求方法和url
            xhr.open('GET', 'http://127.0.0.1:8000/server');
            // 发送
            xhr.send();
            // 事件绑定，处理返回结果
            // readystate 指xhr的状态（有5个状态）
            xhr.onreadystatechange = function() {
                // 当服务端返回的结果解析完成
                if(xhr.readyState === 4) {
                    // 判断服务端响应的状态码 200 / 404 / 403....
                    // 2xx 都是成功
                    if(xhr.status >= 200 && xhr.status <= 300) {
                        // 处理结果 行 头 空行 体
                        console.log(xhr.status); // 行/状态
                        console.log(xhr.statusText); // 行/状态
                        console.log(xhr.getAllResponseHeaders); // 所有响应头
                        console.log(xhr.response); // 响应体
                        // 展示结果
                        let text = document.getElementById('result');
                        text.innerHTML = xhr.response;
                    }
                }
            }
        }
    </script>
</body>
</html>
```

#### json转化  
#### json -> string  
JSON.stringfy()  

#### string -> json  
JSON.prase()  
string.xxx   (自动转化)

## IE缓存问题
IE会缓存Ajax请求结果，导致新结果不显示  
```js
xhr.open('GET', 'url/ie?t=‘Data.now())
```

## 超时设置
```js
xhr.timeout = 2000;
// 设置超时的回调
xhr.ontimeout = function() {
    // todo
}
// 异常回调
xhr.onerror = function() {
    // todo
}
```

## 取消请求
```js
xhe.abort();
```

## 重复发送请求
短时间内多次重复点击导致多次重复获取  
```js
let isSending = false;
function get() {
    // 有正在发送就取消，创建新的
    if(isSending) xhr.abort();
    xhr = new XMLHttpRequest();
    isSending = true;
    xhr.open(.....);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr === 4) {
            isSending = false;
        }
    }
}