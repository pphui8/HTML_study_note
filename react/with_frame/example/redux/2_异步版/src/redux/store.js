//! 该文件专门用于暴露一个store对象

import { createStore, applyMiddleware } from 'redux'
import countRedicer from './count_redicer'
import thunk from 'redux-thunk'

export default createStore(countRedicer, applyMiddleware(thunk))