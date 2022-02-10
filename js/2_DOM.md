## 获取元素方式

### 1. getElementByXxx
通过元素的tagName、id....获取

### 2. querySelector / querySelectorAll
返回匹配指定选择器的第一个/全部元素  
可以使用它们的 id, 类, 类型, 属性, 属性值等来选取元素。

### 3. getAttribute
通过元素的属性来获取

## innerText 与 innerHTML
都代表元素的内容， Text只代表里面的文本，HTML代表里面的元素

## 自定义属性
通过data-xxx来区分程序的与手动添加的属性  
此属性可通过 ```getAttribute``` 或 ```dataset.xxx / dataset['xxx']``` 来获取

使用下面方法获得```<p data-index=""></p>```的元素集
```js
element.getAttribute("data-index"); //更兼容
element.dataset.index;
element.dataset['index'];
```

## 节点操作（用于获取元素）
1. 获取父元素
```parentNode;```

2. 获取子元素
```childNodes```  //得到了所有子节点，包括元素、文本节点
```children```  //获取子元素（非标准）
```first/lastElementChild```  //获取指定子元素

3. 获取兄弟节点
```nextSibling```  //下一个元素
```previousSibling```  //上一个节点

4. 创建/添加节点（动态添加评论等）
```createElement("tagName")```  //创建 
```appendChild("child")```  //向子节点添加
```insertBefore("child", "target")```  //向前插入

5. 删除节点
```removeChild(child)```  //删除指定子元素
> ```element.removeChild(element.children[0])``` 删除第一个元素
> ```element.removeChild(this)```  删除选中的元素

6. 复制节点
```element.cloneNode()```  //拷贝节点（还需插入）

#### 三种创建元素的区别
1. document.write("value")
会导致页面内容全部重绘，已添加的内容会消失
value需要填入全写 ```<p>value</p>```

2. node.innerHTML = "value"
执行如同添加字符串，执行效率不如createElement  
采用数组存储元素效率会比createElement更高  
value需要填入全写 ```<p>value</p>```

3. document.createElement("tag")


## 事件注册
传统：
1. ```<p onclick="function">```
2. ```element.onclick = function() { }```
特点：同一个元素只能指定一个处理函数，后注册的函数会覆盖之前的函数

监听器方式：   
```element.addEventListener("type", Listener, 是否捕获阶段)```  
例如：
```js
btn.addEventListener("click", function() {
    //todo
})
```


##### 兼容性写法(IE9)
```element.attachEvent("ontype", callback())```  
```js
btn.attachEvent("onclick", function() {
    //todo
})
```

## 事件删除
传统方式：
```element.onclick = null```

监听器方式：  
```element.removeListener("type", listener, , 是否捕获阶段)```
> 注：不能使用匿名函数  

例如：
```js
btn.removeListener("click", listener);
```

## DOM事件流
接受事件的顺序：从父到子，再从子回到父
1. 捕获阶段（从父到子 document -> html -> body -> div)
2. 当前目标阶段
3. 冒泡阶段（回到父节点）

js事件只会执行捕获或冒泡的其中一个阶段  
onclick, attachEvent只能获取冒泡阶段的事件
```js
var son = document.querySelector(".son");
var father = document.querySelector(".father");
son.addEventLietener("click", function() {
    // todo
}, true)
father.addEventLietener("click", function() {
    // todo
}, true)
```
father的tudo先执行，后son的todo执行，当capture为true时只会执行捕获阶段  
false时只会执行冒泡阶段，即son的todo执行，后father的tudo执行  

## 事件对象（listener()的参数）
事件对象为系统自动创建  
例如：  
鼠标点击时，Evnet中包含鼠标的参数（位置等）  
键盘点击时，Event包含键盘的参数（键值等）  
> 兼容写法（e = e || window.event)，并不以函数参数处理  

```js
element.addEventListener("click", function(event) {
    console.log('event.target :>> ', event.target);
})
```

Event：
1. target: 事件触发的元素 (this指向事件绑定的元素)
2. srcElement: 事件触发的元素 (非标准)
3. type: 事件类型
4. cancelBubble(): 阻止冒泡
> 点击子元素时不触发父元素绑定的事件  
5. preventDefault(): 阻止默认事件

mouseEvent
1. clientX/Y: 可视窗口的坐标
2. pageX/Y: 页面文档的坐标
3. screenX/Y: 电脑屏幕的坐标

keyboardEvent
1. onkeyup/down/press
2. keycode: 键值

## 事件委托
在父节点绑定事件，通过target来获取触发的元素对象，利用冒泡来对子节点操作  