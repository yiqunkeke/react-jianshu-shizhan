import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focusd: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
})

// reducer 是一个纯函数
// immutable.js库 -- 是一个第三方库。生成immutable对象。此对象不可改变。 把state变成immutable对象。 
// 使用 immutable中的 fromJS 方法来实现。它可能把一个 js对象转化成一个 immutable对象
export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focusd', true) // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象。
        case constants.SEARCH_BLUR:
            return state.set('focusd', false) 
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true) 
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false) 
        case constants.CHANGE_LIST:
            // return state.set('list', action.data).set('totalPage', action.totalPage)
            // merge()可以同时改变多个数据，性能比多次调用set()更高。
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case constants.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state
    }
}