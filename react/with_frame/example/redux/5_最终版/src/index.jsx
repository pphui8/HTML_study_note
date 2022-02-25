import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'

// Provider自动为需要的组件提供provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// store.subscribe(() => {
//     ReactDOM.render(<App />, document.getElementById('root'));
// })
