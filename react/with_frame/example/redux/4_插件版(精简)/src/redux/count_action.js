//! 为Count组件生成action对象
import store from './store'
import { SUM, RED } from './constant'

// 使用箭头函数暴露并精简
export const createSumAction = data => ({
    type: SUM,
    data
})

export function createRedAction(data) {
    return {
        type: RED,
        data
    }
}

// 异步action中一般都会调用同步的action
export const createSumAsyncAction = (data, time) => {
    return () => {
        setTimeout(() => {
            // store.dispatch({
            //     type: SUM,
            //     data
            // })
            // 或直接调用SUM函数
            store.dispatch(createSumAction(data));
        }, time)
    }
}