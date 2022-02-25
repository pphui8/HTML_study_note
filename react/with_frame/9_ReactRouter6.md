## Routes 与 switch
Routes 替代了 switch，但switch匹配上了不会继续匹配，Routes会。  
新属性： useSensetive 是否区分大小写

## 默认页面组件
```Navigate```  
只要这个组件被渲染，就会修改路径，切换视图  
```jsx
<Route path='/' element={<Navigate to='/Home' />}/>
```

## 路由组件的高亮效果
之前: NavLink 在点击时自动添加一个类名active
现在：若要指定，需要改className为一个函数  
属性：   
1. end: (加入父组件)，当子组件匹配时对应的父级就不高亮了
2. index：指定默认路由  
```jsx
<NavLink className={({isActive}) => isActive? 'name1' : 'name2'} to='/home'>Home</NavLink>
```

## 路由表
用于替代路由注册，现在可以直接用路由表  
并可以放入 ```Routes.jsx``` 文件中 
```jsx
const element = useRoutes({
    {
        paht: 'home',
        element: <Home />
    },
    {
        paht: 'about',
        element: <About />
    },
    {
        path: '/',
        element: <Navigate to='/about' />
    }
})

// 注册路由，只需要一条
{element}
```

## 嵌套路由
修改路由表
```jsx
const element = useRoutes({
    {
        paht: 'home',
        element: <Home />
    },
    {
        paht: 'about',
        element: <About />
        children: [
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'messgae',
                element: <Messages />
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/about' />
    }
})
```

## 参数传递
1. params
注册时：```'path/:id/:title'```  
接收：
```jsx
const { search, setSearch } = useParams();
const id = search.get('id');
```

2. search
发送时：同v5
接收时：```const { id, title } = useSearch()```

3. state
发送时：
```jsx
<NavLink to='aboue' state={{id: 9, title: 'abc'}}></NavLink>
```
接收时：useState()冲突
```jsx
import { useLocation } from 'react-router-dom'

const { state: { id, title }} = useLoation()
```

## 编程样路由函数
函数中实现路由，并能前进后退
```jsx
const navigator = useNavigate();

navigator('home', {
    // 不支持search, param写在类里，要写在路径里
    replace: false,
    state: {
        id: 9,
        title: 'abc'
    }
})
navigator(1);   // 前进
navigator(-1);  // 后退
```

## useRouterContext()
判断是否处于路由环境中(是否被 ```<BrowseRouter>``` 包裹)

## useNavigationType()
返回当前路由是通过哪种方式过来的
```jsx
// PUSH, POP, REPLACE
```

## useOutlet()
用来呈现当前组件中嵌套路由  
```jsx
const res = useOutlet();
console.log(res)
// 若嵌套路由未挂载，则为nnull
// 不然返回组件对象
```

## useResolvedPath()
给定一个URL，解析其中的path, search, hash
```jsx
console.log(useResolvedPath('/user?id=001'));    // path: '/user', search='/user?id=001', hash='xxx'
```