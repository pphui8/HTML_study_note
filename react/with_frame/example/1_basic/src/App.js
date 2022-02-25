// 引入React
import React from 'react';
import Hello from './components/Hello'
import Welcome from './components/Welcome'

// 多种引入方法
// import React, {Component} from 'react';  // 这样引入的是React中的Component对象
// const {Component} = React;

// App是一个外壳，不建议直接作为组件
class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome />
            </div>
        )
    }
}

// 暴露App组件
export default App