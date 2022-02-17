## props: 获取组件属性
> props为只读  
```jsx
class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        // 提前解构
        const {name, age, gender} = this.props
        return (
            <ul>
                <li>姓名: {name}</li>
                <li>性别: {age}</li>
                <li>年龄: {gender}</li>
            </ul>
            // <ul>
            //     <li>姓名: {this.props.name}</li>
            //     <li>性别: {this.props.age}</li>
            //     <li>年龄: {this.props.gender}</li>
            // </ul>
        )
    }
}

// jsx中数字类型需要加花括号
ReactDOM.render(<Demo name="tom" gender="男" age={18}/>, document.getElementById("test"));
ReactDOM.render(<Demo name="lisa" gender="女" age={22}/>, document.getElementById("test1"));
ReactDOM.render(<Demo name="hope" gender="男" age="25"/>, document.getElementById("test2"));
```

批量解析：
```jsx
const person = [
    {name: "lisa", age: 18, gender: "女"},
    {name: "tom", age: 20, gender: "男"}
]
person.map((item, index) => {
    // 类的展开语法：{...obj}
    // 作用：复制了一个对象
    ReactDOM.render(<Demo {...person[index]}/>, document.getElementById("test" + index));
})
```

## 高级操作
### 默认值、类型指定
引入库：
```html
<script src="./js/prop-types.js"></script>
```
语法：
```jsx
class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        const {name, age, gender} = this.props
        return (
            <ul>
                <li>姓名: {name}</li>
                <li>性别: {age}</li>
                <li>年龄: {gender}</li>
            </ul>
        )
    }
}

// 16版以前需引入库：prop-types.js
Demo.propTypes = {
    name: PropTypes.string.isRequired, //限制字符为必须
    age: PropTypes.number,
}
Demo.defaultProps = {
    gender: "男",
    age: 0,
}

const person = [
    {name: "lisa", age: 18, gender: "女"},
    //  Invalid prop `age` of type `string` supplied to `Demo`
    {name: "tom", age: "20", gender: "男"}
]
person.map((item, index) => {
    ReactDOM.render(<Demo {...person[index]}/>, document.getElementById("test" + index));
})
```

语法糖：
把类型限制放入类中，前面加入static限制（限制属性为类而非实例对象上）
```jsx
class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        const {name, age, gender} = this.props
        return (
            <ul>
                <li>姓名: {name}</li>
                <li>性别: {age}</li>
                <li>年龄: {gender}</li>
            </ul>
        )
    }
    static propTypes = {
        name: PropTypes.string.isRequired, //限制字符为必须
        age: PropTypes.number,
    }
    static defaultProps = {
        gender: "男",
        age: 0,
    }
}
const person = [
    {name: "lisa", age: 18, gender: "女"},
    //  Invalid prop `age` of type `string` supplied to `Demo`
    {name: "tom", age: "20", gender: "男"}
]
person.map((item, index) => {
    ReactDOM.render(<Demo {...person[index]}/>, document.getElementById("test" + index));
})
```

## 构造器详解
> react中一般不写构造函数  

react中的构造函数仅用于做：
1. 赋予state初值  
2. 为事件处理函数绑定实例  
> 其它事均能自己做，以下均不用写
> ```jsx
> constructor(props) {
>     super(props);
>     const {name, age, gender} = this.props
>     this.name = name;
>     this.age = age;
>     this.gender = gender;
> }
> ```

若省略
```jsx
constructor(props) {
    super(props);
}
```
则在接下来的代码中不能使用，props可能未定义
```jsx
const {name, age, gender} = this.props
```
但render(props)仍然正常。。

## 函数式组件使用props
无：参数限制  
```jsx
function Demo(props) {
    const {name, age, gender} = props
    return (
        <ul>
            <li>姓名: {name}</li>
            <li>性别: {age}</li>0
            <li>年龄: {gender}</li>
        </ul>
    )
}
const person = [
    {name: "lisa", age: 18, gender: "女"},
    //  Invalid prop `age` of type `string` supplied to `Demo`
    {name: "tom", age: 20, gender: "男"}
]
person.map((item, index) => {
    ReactDOM.render(<Demo {...person[index]}/>, document.getElementById("test" + index));
})
```