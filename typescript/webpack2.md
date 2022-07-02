## webpack2
### 创建使用的 html 文件
> 自动管理工具：```npm i -D html-webpack-plugin```

1. 下载
2. 在 `webpack.config.js` 中通过 ```const HTMLWebpackPlugin = require('html-webpack-plugin');``` 来导入
3. 配置webpack插件

```js
// 其它
const HTMLWebpackPlugin = require("html-webpack-plugin");

// webpack中的所有配置信息都应写入 module.exports对象中
module.exports = {
    // 其它

    // 配置 webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            title: '自定义title',
            template: './src/index.html', // 设置生成网页的模板，使用时就不用设置title了
        }),
    ],
}
```
