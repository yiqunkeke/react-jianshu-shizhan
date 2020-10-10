import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

// 由于changeList不需要被导出，而是直接被getList调用，
// 建议大家要么放在顶部，要么放在底部
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),  // 在传递数据时，把数据也变成 immutable的
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
        .then((res) => {
            const data = res.data
            dispatch(changeList(data.data))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

// 关键点： 
// 把异步请求都拆分到了 actionCreators中、要求actionCreators返回一个函数，则必须要使用 redux-thunk
// reducer中的 list,由于使用了 fromJS，list也是一个immutable数组。
// 需要在传递数据时，把数据也变成 immutable的。这样在修改store中的数据时，才不会出错。因为接口中的数据都是普通对象。而reducer中的list是immutable。
// 如果直接赋值，则等于把普通对象赋值给了immutable类型的对象。类型发生了变化 。所以，需要在传递数据时，把数据也变成immutable的
