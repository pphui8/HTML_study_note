## 三种常见布局方式

###准则
1. 上下看标准流，左右看浮动
2. 先设置大小再设置位置
浮动的盒子只会影响后面的盒子，不影响前面的

#### 标准流
> 标签按照排好的顺序进行排列
块级元素从上到下排列
块内元素从左到右

#### 浮动流
浮动：创建一个浮动框，使其向左/右移动到边界
改变元素默认的排列方式
> 例如消除元素默认的间距等
特性：
1. 脱离标准流的控制，移动到指定位置（脱标）
2. 浮动的盒子不再保留原先的位置
3. 浮动的元素具有行内块属性
> 由于1与2特性，标准流与浮动的元素就会重叠
> 浮动的盒子通常使用标准流父元素配合使用

##### 清除浮动
eg：有时不方便指定父元素高度，而浮动元素并不能“撑开”父元素而导致父元素不能自动适应大小  
清除浮动后，父元素能自动指定高度（使元素只在父元素内浮动） 

清除左/右/两边的浮动  
clear： left/right/both

方法：
1. 额外标签发（w3c推荐）
在最后一个元素后添加一个空标签，也就是设了一堵墙，框住其中的元素
br, div(清除过的）<u>块级</u>元素
```html
<div>
    <div></div>
    <div></div>
    <div style="clear: both;"></div>
</div>
```
> 缺点：添加了一个新元素

2. 清除溢出法
给父元素添加属性：```overflow: hidden/auto/scroll```
此属性用于消除元素溢出，不止有此用法
> 缺点： 看不见溢出的元素

3. :after伪元素法
给父元素加上此属性
```html
.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visiblity: hidden;
}
.clearfix: {
    <!-- 兼容ie -->
    *zoom: 1;
}
```

4. 双伪元素法
给父元素加上此属性  
还可以防止元素向前溢出
```html
.clearfix:before,
.clearfix:after {
    content: "";
    display: table;
}
clearfix:after {
    clear: both;
}
.clearfix {
    *zoom: 1;
}
```

### 定位的叠放次序
z-index: ;  //z即z轴
正数 > 0/auto > 负数
若index相等则后来居上

### 居中方法
1. margin: auto;（水平居中）
2. 加定位：left: 50%; margin-left: -盒子一半;（水平居中）
同理：垂直居中：top: 50%; margin-top: -盒子一半;

### 定位拓展
1. 定位（固定/绝对定位）会使元素属性变为行内块元素
2. 浮动会压住盒子，但不会压住盒子中的内容，定位（固定/绝对定位）会

### 元素隐藏
display: none;
显示：display: block;
visibility: hidden;
显示：visibility: visible;

### 溢出处理
overflow:
1. visible：可见（默认）
2. hidden：不可见
3. scroll：显示滚动条
4. auto：需要的时候添加滚动条

### CSS三角形
大小为0的盒子边框为三角形