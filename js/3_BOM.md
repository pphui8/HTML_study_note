## 常见事件 
window.setTimeout(callback, time): 延时后执行
window.clearTimeout(TimerID): 清除定时器

window.setInterval(callback, time): 间隔调用
window.clearInterval(TimerID): 清除定时器

## this指向的对象
1. 全局作用域或普通函数中的this指向window（定时器中的this也指向window）

2. 方法中指向调用的对象

3. 构造函数中的this指向构造的实例

## js的执行队列
同步：与代码顺序同
异步：新建线程运行

同步任务：放入主线程执行栈

异步任务：放入任务队列， 包括：
1. 普通事件click, resize
2. 资源加载onload
3. 定时器

> 先执行执行栈中的同步任务  
> 再把异步任务调入执行栈，执行异步任务

## 各种对象
- 通过```对象.方法```调用
1. location
>窗体url
>> 1. herf: url
>> 2. host
>> 3. port
>> 4. pathname
>> 5. search
>> 6. hash: 锚点(#xxx)
>
>方法
>> 1. assign("url") //页面跳转
>> 2. replace("url") //跳转但不记录历史
>> 3. reload()

2. navigator  
包含浏览器对象的信息（可用于区分pc与移动端打开的不同页面）

3. history
> 1. back()
> 2. forward()
> 3. go(index)  //前进/后退index步 