import reducer from './reducer'
import * as actionCreators from './actionCreators' // 把文件中所有暴露的内容，都导入进来，并起名为 actionCreators ----ES6中引入语法
import * as constants from './constants'

export { reducer, actionCreators, constants }