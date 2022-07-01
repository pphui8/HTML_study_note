## webpack 打包
1. 生成 package.json:  ```npm init -y```
2. 安装依赖：```npm i -D webpack webpack-cli typescript ts-loader```
3. 新建```webpack.config.js```，写入：
```js
// 引入一个包
const path = require('path');

// webpack中的所有配置信息都应写入 module.exports对象中
module.exports = {
    // 入口文件
    entry: './src/index.ts',
    // 出口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 配置 loader， 打包时使用的模块
    module: {
        // 指定 loader 的规则
        rules: [
            {
                // test指定规则生效的文件
                test: /\.ts$/,
                // use指定使用的loader
                use: 'ts-loader'
                // 指定要排除的文件
                exclude: /node_modules/
            }
        ]
    },
}
```
4. 设置 ts 的 webpack，新建 tsconfig.json
```json
{
    "compilerOptions": {
        "target": "ES2015",
        "module": "ES2015",
        "strict": true,
    },
}
```
5. package.json 中的 `scripts` 下加入 build 指令
```json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  ...
}
```
6. 执行 ```npm run build``` 运行项目
