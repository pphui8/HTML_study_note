//! 该文件专门用于暴露一个store对象

import { createStore } from 'redux'
import countRedicer from './count_redicer'

export default createStore(countRedicer)