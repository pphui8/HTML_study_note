//! 该文件专门用于创建一个为Count组件服务的reducer
//! 接收的参数：之前的状态(perState), 动作(action)

import {SUM, RED} from './constant'

// 初始值
const initState = 0
export default function countReducer(preState = initState, action) {
    // 从action对象中获取type，data
    const { type, data } = action;
    // 根据type决定如何加工数据
    switch(type) {
        case SUM:
            console.log(preState, data);
            return preState + data;
        case RED:
            return preState - data;
        default: {  // 初始化
            return preState;
        }
    }
}