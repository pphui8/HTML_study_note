## touchEvent
touches：正在触摸屏幕手指列表

targetTouches：在DOM元素上的手指列表(常用)

changedTouches：状态改变了的手指列表

## fastclick
click有300s的延时来获取双击事件  
想要直接执行：
1. ```<meta content="user-scalable=no">``` 禁用缩放
2. 自定义touchstart -> touchend时间
3. fastclick插件  
```js
<script type='application/javascript' src='/path/to/fastclick.js'></script>
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}
```

## swiper: 触摸滑动插件
https://github.com/nolimits4web/swiper


## 移动视频插件
https://github.com/ireaderlab/zyMedia

## 移动开发框架
bootsrap