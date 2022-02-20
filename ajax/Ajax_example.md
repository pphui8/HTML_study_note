## jQuery
```js
$('button').eq(0).click(function() {
    console.log("aaaa");
    $.get('http:/127.0.0.1/jq', {a:100, b:200}, function(data) {
        console.log(data);
    }, 'json')  // 响应体类型   
    $.post('http:/127.0.0.1/jq', {a:100, b:200}, function(data) {
        console.log(data);
    })
})
```
通用方法：
```js
$('button').eq(0).click(function() {
    $.ajax({
        url: 'http://127.0.0.1:8000/jq',
        data: {a:100, b:200},
        type: 'GET',
        success: function(data) {
            console.log(data)
        },
        timeout: 2000,
        error: function() {
            alert("worng");
        },
        headers: {
            c: 300,
            d:400,
        }
    })
})
```

## Axios
get
```js
btn.onclick = function() {
    axios.get('http://127.0.0.1/axios', {
        // url参数
        params: {
            id:100,
            username: 'pphui8'
        },
        // 请求头
        headers: {
            name: 'pphui',
        }
    }).then(value => {
        // 返回值
        console.log(value);
    })
}
```

post
```js
btn.onclick = function() {
    axios.post('http://127.0.0.1/axios', {
            // 请求体
            xxx: 'xxx',
        }, {
        // url参数
        params: {
            id:100,
            username: 'pphui8'
        },
        // 请求头
        headers: {
            name: 'pphui',
        }
    }).then(value => {
        // 返回值
        console.log(value);
    })
}
```


一般方法： 
```js
btn.onclick = function() {
    axios({
        url: 'xxx',
        params: {
            xxx: 10,
        },
        headers: {
            a: 100
        },
        data: {
            username: 'admin'
        }
    }).then(response => {
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.data);
    })
}
```

## fetch
```js
btn.onclick = function() {
    fetch('http://127.0.0.1:8000/fet', {
        // 请求方法
        method: 'POST',
        headers: {
            name: 'pphui8'
        },
        body: `username: pphui89`
    }).then(response => {
        return response.json();
    }).then(response => {
        console.log(response);
    })
}
```