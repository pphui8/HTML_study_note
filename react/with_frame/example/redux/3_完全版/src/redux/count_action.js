//! 为Count组件生成action对象
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