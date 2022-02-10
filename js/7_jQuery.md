## 基本使用
顶级对象：$（入口函数）  
使用语法：  
```js
$(function() {
    $("tagName").func();
})

or

jQuery(function() {
    jQuery("tagName").func();
})
```

> 使用 ```jquery $(function() {})``` 
> 
> 同 ```$(document).ready(function(){})```
> 
> 相当于 ```window.onload = function(){};```

## DOM对象与jQuery对象
js原生获取的对象即DOM对象  

jQuery对象为包装过后的对象，是一个伪数组对象  

#### 对象转换：  
##### DOM -> jq
```$("DOM")```

##### jq -> DOM
> jq对象是一个伪数组，第一个元素即DOM对象

```jq[0]```  
```jq.get(0)```

## jq API
```$("value")``` value = .类名，#ID，*，标签...  

### 子代/兄弟选择器：同css
```$("element>child")```
```js
$("p").parent("div")
$("p").children("li")   //最近一级
$("p").find("p")    //所有后代
$("p").sibling("p")     //兄弟节点
$("p").eq(index)
```

### 筛选选择器
```js
$("element:first")
$("element:last")
$("element:eq(index)")
```

例如常用的
```$(ul li:first)```

### 修改样式
```js
$("element").css("key", "value")
$("element").css("key") //返回样式值
$("element").css("key":"value", "key":"value".....)
$("element").addClass("Name")   //不会覆盖原生类名
```
不仅只改变第一个元素，隐式遍历所有元素

## 常用动画/效果
```js
// 显示隐藏
$("#element").show("fast");
$("#element").hide("slow");
$("#element").toggle(1000);

// 滑动
$("#element").slideDown(1000);
$("#element").slideUp()
$("#element").slideToggle();

// hover，如果只写一个函数，则鼠标经过与离开都会触发
$("#element").hover(function() {
    // todo
}, function() {
    //todo
})

// 防止动画多次触发（取消动画队列）
// stop() 放在动画前面
$("#element").stop().slideToggle();

// 淡入淡出
$("#element").stop().fadeToggle();

// 动画,修改的样式以类的方式传递
$("#element").animate({
    width: 500,
}, 1000)
```


## 元素属性
> 如\<a>标签中的herf属性
```js
$("#element").prop("herf", "value")
```

## 元素内容
```js
$("#element").html()    //同innerHTML
$("#element").text()    //同innerText
$("#element").val()     //获取表单值
```

## 元素操作
### 元素遍历
> domEle为DOM对象，注意转换$(domEle)
```js
$(".nav").each(function(index, domEle) {
    // todo
})
```

> 遍历所有数据，用于遍历数据
```js
$(function () {
    $.each($("div"), function (index, ele) {
        // todo
    })
})
```

### 元素创建/删除
```$("<li></li>")``` 来创建  
1. append 来放入指定元素内部的前面  
2. after/before来添加到前/后
3. remove() 来删除
4. empty() 来匹配删除子节点
5. html() 来修改子元素  
```js
$(function () {
    $("#element").append($("<li></li>"))
})
```

### 尺寸/位置
```js
width()/height()    // 只获取w/h
innerWidth()    // 不包括padding
outerWidth()    // 包括padding
outerWidth(true)    //总高度
```

```js
offset()    //对于文档的偏移量，而非父（有定位）盒子
offset({left: 10, top: 10})     //修改
position()  //相对于父元素位置，不能设置偏移
```

### 设置卷去头部
> 例：输出页面卷去头部的大小
```js
// 当页面滚动时
$(window).scroll(function() {
    // 输出卷去的头部大小
    console.log($(document).scrollTop);
})
```

设置滚动到页面某位置  
```js
$(document).scrollTop(1000)
```

## 互斥锁/节流阀
> 在动画执行时，希望其它输入不被执行
使用回调函数对互斥锁解锁

## 事件
绑定
```js
$("element").事件
// 一次性绑定多个事件
// 且可以绑定到动态创建的元素上
$("element").on({
    mouseenter: function() {
        // todo
    },
    click: function() {
        // todo
    }
})

// 委托绑定
// 把li上的事件绑定到ul上
$("ul").on("click", "li", function() {
    // todo
})
```  
解绑 
```js
$("element").off();
$("element").off("click");
```

自动触发事件trigger
```js
1. $("element").click()
2. $("#element").trigger("click");
//不会触发元素的默认行为
3. $("#element").triggerHandler("click");
```

## 拷贝
```js
// b 拷贝到 a, 会覆盖a的原数据
$.extend(a, b);

// 是否深拷贝，默认为false
$.extend(true, a, b);
```

## 插件
#### 图片懒加载
只显示用户看到的图片，使用插件

#### 全屏滚动
图片一张张滚动

## bootstrap
> bootstrap是jQuery的一个组件