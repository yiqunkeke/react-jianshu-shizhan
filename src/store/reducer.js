// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable' // 使用 redux-immutable的 combineReducers 生成的数据内容是 immutable的。
import { reducer as headerReducer } from '../common/header/store'  // as 是ES6语法

const reducer = combineReducers({
    header: headerReducer
})

export default reducer

// 【1.使用combineReducers对数据进行拆分管理】
// Reducer中如何放过多的数据，可能会造成不可维护。
// 所以，需要将reducer进行拆分。
