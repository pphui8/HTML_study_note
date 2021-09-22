## 元素分类
- 块元素：如div, p
1. 独占一行
2. 可设置宽高  
3. 默认宽为父级元素的100%
4. 可容纳块元素与行内元素

- 行内元素：如span, a
1. 一行可设置多个
2. 不可设置宽高  
3. 默认宽度为内容元素的宽度
4. 只能容纳文本或块内元素

- 行内块元素：如img, input
1. 一行可设置多个，且之间保留一定距离
2. 默认宽度为内容宽度
3. 可设置宽高

## CSS三大特性
#### 1. 重叠性
冲突的属性，参照就近原则，后来者覆盖之前的属性
#### 2. 继承
嵌套的元素，其中的属性会继承
- 特殊：行高的继承
可在父元素中设置**不加单位**的行高（1.5），设置子元素行高即为其本身行高的1.5倍。
> Test会改为粉色，行高为21
> ```html
> <style>
>     div {
>         color: pink;
>         font: 12px/1.5 "yahei";
>     }
>     p {
>         /* 实际行高21px */
>         font-size: 14px;
>     }
> <style>
> 
> <div>
>     <p>Test<p>
> <div>
> ```
#### 3. 优先级
- 若选择器相同，则执行重叠性  

| 元素类型 | 优先级别 |
| :----: | ----: |
| 优先级表 | 1 | 
| 继承 | 2 | 
| 元素选择器 | 3 | 
| 类/伪类选择器 | 4 | 
| id选择器 | 5 | 
| 行内样式 | 6 | 
| !important | 无穷大 |
```color: pink!important```œ

#### 权重叠加
复合选择器的权重会叠加，复合时累加
但优先级的优先度大于权重叠加