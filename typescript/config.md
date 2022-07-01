## 编译选项
设置一些自动化的编译选项

### 1. 热更新
> ```tsc Test.ts -w```
编译时开启监视模式

### 配置文件
1. 在目录下新建 config.json
2. 输入:
```json
{

}
```
3. 直接运行 ```tsc```

---

config.json样例：
```json
// ts 编译器地配置文件
{
  // 设置编译时包含哪些文件
  // /* 表示所有文件， /** 表示所有文件夹
  "include": [
    "./src/**/*"
  ],
  // 不需要被编译的文件目录（如node_modules）
  "exclude": [
    "./src/lib/*"
  ],
  // 继承某配置文件的配置（而不用复制一遍）
  "extends": "./src/node_models/config.json",
  // 指示被编译文件的列表（一个个列出来，一般不用这个）
  "files": [
    "./abc.ts",
    "./jkl/cde.ts",
  ],
}
```

---

进阶配置：
```json
{
  // 编译选项
  // 技巧：给一个错误值会报错给出能写哪些值
  // https://www.tslang.cn/docs/handbook/compiler-options.html
  "compilerOptions": {
    // 指定代码编译的目标版本
    "target": "ES6",
    // 指定代码运行包含的库（默认值够用）
    "lib": ["ES6", "DOM"],
    // 设置编译后使用的模块化系统
    "module": "CommonJS",
    // 设置编译后文件存放的目标文件夹
    "outDir": "./dist",
    // 将代码合并为一个文件并重命名
    "outFile": "./dist/app.js",
    ...
  },
}
```

---

更多配置：
```json
{
  // 是否编译 js 文件（默认false）
  "allowJs": false,
  // 是否检查 js 代码（默认false）
  "checkJs": false,
  // 是否移除注释（默认false）
  "removeComments": false,
  // 不生成编译后文件（默认false）
  "noEmit": true,
  // 当有错误时不生成编译后代码（默认false）
  "noEmitOnError": false,
}
```

---

有关语法检查的选项：
```json
{
  // 所有严格检查的总开关
  "strict": false,
  // 是否开启严格模式
  "alwayStrict": false,
  // 不允许隐式的 any 类型
  "noImplicitAny": false,
  // 不允许不明确类型的 this
  "noImplicitThis": false,
  // 严格检查空值
  "strictNullChecks": false,
}
```
