## 函数式组件
### 常用API
#### 1. eact.useState()
```jsx
// count为data, setCount为操作data的API, 0为初值
const [count, setCount] = React.useState(0);
```

```jsx
export default function Count() {

    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>sum: {count}</h1>
            <button onClick={add}>push!!!!!</button>
        </div>
    )
    function add() {
        // setCount(count + 1);
        setCount(count => count + 1)
    }
}
```

> 由于我们所有的数据都共用同一个 state，因此修改其中一个会导致另外的被覆盖。
> 为了解决这个问题，我们必须给每一个数据提供一个变量用来保存状态，从而避免冲突。
> 解决办法是使用多个数组来进行保存  

```jsx
const [count, setCount] = React.useState(0);
const [name, setName] = React.useState('tom');
```

#### 2. React.useEffect()
监测  
1. 当没有第二个参数时：只要组件发生变化，调用(类似 ```componentDidUpdate()```)
2. 当传入第二个参数(数组)：页面加载完毕时，调用(类似 ```componentDidMount()```)
3. 函数返回的函数：即组件将卸载的回调(类似 ```componentWillUnmount()```)

第二个参数为检测的目标  
只监测了name的 ```componentDidUpdate()```  
检测了count的 ```componentDidMount()```
```jsx
export default function Count() {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('tom');
    React.useEffect(() => {
        console.log(count);
        return () => {
            console.log('component will unmount')
        }
    }, [name]);
    return (
        <div>
            <h1>sum: {count}</h1>
            <button onClick={add}>push!!!!!</button>
        </div>
    )
    function add() {
        setCount(count => count + 1)
    }
}
```

### React.useRef()
与ref相同
```jsx
export default function Count() {
    const myRef = React.useRef();
    return (
        <div>
            <input ref={myRef} />
            <button onClick={show}>push!!!!!</button>
        </div>
    )
    function show() {
        alert(myRef.current.value)
    }
}
```