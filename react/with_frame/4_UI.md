## ant-design(蚂蚁金服)
install: ```yarn add antd```
#### !!! 引入时不仅要引入组件，还要引入样式
```jsx
import 'antd/dist/antd.min.css'
import { Button } from 'antd'
import { DollarCircleOutlined } from '@ant-design/icons'

export default class App extends Component {
  render() {
    return (
      <div>
        <Button>push please</Button>
        <DollarCircleOutlined style={{fontSize: '20px'}} />
      </div>
    )
  }
}
```

## vantUI 用于移动端的UI库

## 高级配置
#### 按需引入
```import {Button} from 'antd'```

或使用  

或使用  
```react-app-rewired```  （以弃用）
麻烦欸  
[antd-design配置按需加载](https://juejin.cn/post/6844904184890785805)

## 自定义主题
antd 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。  
[官方教程](https://ant.design/docs/react/use-with-create-react-app-cn)