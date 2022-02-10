## offset 元素偏移量
此元素到有定位父元素的位置偏移量  
element.offsetTop  
element.offsetLeft  

元素宽高  
element.offsetWidth  
element.offsetHeight  
> style只能得到行内样式表的数据，且不含padding, border，不可更改

实战：元素拖动  
鼠标坐标减去鼠标在盒子内的坐标即盒子坐标

## client 元素可视区
client与offset相同，但不包含边框

## scroll 内容实际大小
当元素中含有多元素时，元素内容可能比元素大。不包含边框