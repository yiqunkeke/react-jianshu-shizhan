import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./style";
import { IconfontStyle } from "./statics/iconfont/iconfont";
// import { GlobalStyle, Button, TomatoButton} from "./style";
import App from './App';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconfontStyle />
    {/* <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
    <TomatoButton as="a" href="http://www.baidu.com">Tomato Button</TomatoButton> */}
    <App />

  </Fragment>,
  document.getElementById('root')
);

//#region 【styled-components与 reset.css的结合使用】
// 
// 在 .js 文件中，如果以 import './index.css' 方式引入css文件，则这个css文件【作用在全局】。
// 它是一个全局样式文件，在所有的组件内都有效。
// 全局样式弊端：存在【样式冲突】

// 推荐使用第三方模块【styled-components】对样式文件进行管理。官网 https://styled-components.com/

// PC项目，推荐使用reset css, 进行样式重置。官网 https://meyerweb.com/eric/tools/css/reset/
//#endregion

//#region 【使用styled-components完成Header组件布局】
// 推荐使用 styled-components 在React项目中进行页面布局
//#endregion

//#region 【使用iconfont嵌入头部】
//#endregion

//#region 【使用react-redux进行应用数据的管理】
/** 2020-10-10日
 * 安装： npm install redux react-redux --save
 * 
 * 注意1： 尽量把所有数据都放在 redux 中去管理
 * 
 * 2.创建store：
 * import {createStore} from 'redux';
 * import reducer from './reducer'        // 手册
 * const store = createStore(reducer)
 * export default store
 * 
 * 3.创建reducer: 
 * reducer 是一个纯函数--固定的输入输出
 * const defaultState = {}
 * export default (state = defaultState, action) => {
 *    return state
 * }
 * 
 * 4. 使用react-redux：
 * 在 App.js 中引入 store 和 react-redux 中的 Provider组件
 * import store from './store'
 * import {Provider} from 'react-redux'
 * render() {
 *  <Provider store={store}>
 *    <Header />
 *  </Provider>
 * }
 * 意思是：Provider 把 store都提供给了内部的所有组件。反过来说，Provider内部的所有组件，都可以访问 store中的数据了。
 * 
 * 5. 组件连接store:
 * 在 header 组件中，使用 connect 方法可以帮组件与store建立连接。
 * import { connect } from 'react-redux' 
 * const mapStateToProps = (state) => {
 *  return {
 *    focused: state.focused    // 将store中的state.focused映射成 focused
 *  }
 * }
 * const mapDispatchToProps = (dispatch) => {
 *  return {
 *    handleInputFocus() {}
 *  }
 * }
 * export default connect(mapStateToProps, mapDispatchToProps)(Header)
 * 
 * 6. 组件中使用store中的数据:
 *  this.props.focused
 *  this.props.handleInputFocus
 * 
 * 7. 组件修改store中的数据：
 * 派发 action
 *  const action = {
 *    type: 'search_focus'
 *  }
 *  dispatch(action)
 * 
 * 8. reducer 会接收到 action，并处理返回新的 state:
 * 
 */
//#endregion

//#region 【使用redux中的combineReducers整合拆分后的reducer】
/**  github 搜索 ：redux-devtools-extension  工具
 *   
 * 注意1： 在使用 redux时，所有的数据都是放在 reducer中的，数据处理也是放在 reducer中处理的。
 * 通常情况下，一个文件的代码如果超过了300行，就说明你的设计是有问题的。
 * 所以不能让 reducer变得太大。
 * 
 * redux 提供了combineReducers 函数的功能,帮助我们把拆分后的 reducer 进行整合。
 * 
 * 1. 把header中的数据和操作，放在 header/store/reducer文件中（笔记本A）
 * 
 * 2. 在src/store/reducer文件中整合(笔记本A、笔记本B)：
 *  import { combineReducers } from 'redux'
 *  import headerReducer from '../common/header/store/reducer'
 *  export default combineReducers({
 *    header: headerReducer
 *  })
 *  
 * 3. 组件中访问store中的方式也需要改变：
 *  由于拆分后的 reducer中层级关系多了一层 header，所以在组件中，映射关系处也需要修改：
 *  focused: state.header.focused
 * 
 * 4. 优化：创建header/store的出口文件 index.js
 *  import reducer from './reducer'
 *  export { reducer }
 *  好处：在第2步中，只需要 import { reducer } from '../common/header/store'
 */
//#endregion

//#region 【actionCreators与 constants拆分】
/** actionCreator.js
 *  constants.js
 */
//#endregion

//#region 【使用Immutable.js管理store中的数据】
/**
 * reducer文件的作用：负责拿到原始state值与action,处理并返回新的state值。
 * 注意点： reducer中的函数，一定不能修改原始state！而要返回新的state值。
 * 
 * 使用 immutable.js 库：facebook 3年开发出来的，会生成一个immutable对象。这个对象是不可改变。
 * 假设 state 是一个 immutable对象，则 state值就不可改变，这样 reducer就不会出问题，比如误改了 state的值 。
 * 
 * 1、安装 immutable.js，在 github上搜索 immutable
 * npm i immutable
 * 2、把state变成immutable对象
 * import {fromJS} from 'immutable'   // fromJS方法可以帮我把JS对象转化成immutable对象
 * const defaultState = fromJS({
 *  focused: false
 * })
 * 3、在组件中获取immutable对象：使用get()方法
 * state.header.focused，由于 state.header已经是一个immutable对象了，如果直接使用.语法去调用focused是不行的。
 * 需要使用get()方法获取
 * state.header.get('focused')
 * 4、设置immutable对象：使用set()方法
 * 比如在 reducer中，设置值时：
 * return {
 *  focused: true
 * }
 * 改成
 * return state.set('focused', true)
 * immutable对象的set()方法会结合之前immutable对象的值和设置的值，返回一个全新的对象。并不会修改原始state数据。
 * 
 * 
 * 回顾：如果使用原始的reducer写法，只时刻警惕不能修改原始state，这样做存在风险。
 * 引入facebook提供的immutable库，可以帮助我们把state转化成immutable对象。
 * 同时使用get() 和 set() 方法分别来获取和设置 immutable对象的值。
 * 这样就可以完全避免掉自己不小心改变state中的数据的问题。
 */
//#endregion

//#region 【使用redux-immutable中的combineReducers统一数据格式】
/**
 * 使用了 immutable之后，在获取immutable对象值时，
 * state.header.get('focused')
 * 这样的代码很别扭，state是一个js对象，而state.header是一个immutable对象，所以想调用focused时，先要使用.语法，再使用get()方法。
 * 这样的数据获取行为是不统一的。
 * 
 * 希望state也是一个immutable对象。而不是js对象。
 * 此时需要依赖 redux-immuatble 库。
 * 
 * 1、安装 npm i redux-immutable
 * 
 * 在src/store/reducer中：
 * 以前，combineReducers 是从 redux中来的
 * import {combineReducers} from 'redux'
 * 2、现在我们让 combineReducers 从 redux-immutable中来
 * import {combineReducers} from 'redux-immutable'
 * 
 * 3、在组件中
 * state.header.get('focused')
 * 改成 state.get('header').get('focused')   或者直接写成 state.getIn(['header', 'focused'])
 * 意思是，从header中取focused值。
 * 
 * 这样，state也就变成了 immutable对象。
 * 
 * 
 */
//#endregion

//#region 【热门搜索样式布局】
/**
 * React只支持IE8及以上的浏览器
 */
//#endregion

//#region 【Ajax获取数据】
/**
 * 使用 redux-thunk，统一把异步获取数据，放在action中处理
 * 1、安装 
 * npm i redux-thunk
 * 2、中间件指action与store的中间，实际上是对dispatch方法的升级。它应该在创建store时被使用
 *   import { createStore, applyMiddleware } from 'redux'
 *   import reducer from './reducer'
 *   import thunk from 'redux-thunk'
 *   const store = createStore(reducer, applyMiddleware(thunk))
 *   export default store
 * 3、在组件中派发Action
 *   dispatch(actionCreator.getList())
 * 4、在actionCreator中创建getList()方法
 *    export const getList = () => {
 *     return (dispatch) => {
 *         // 在此处派发异步请求
 *     }
 *    }
 * 5、借助axios：安装 npm i axios
 *    import axios from 'axios'
 *    在4步中写
 *    axios.get('/api/headerList.json')
 *    .then((res)=>{
 *      console.log(res)
 *    })
 *    .catch((err)=>{
 *      console.log(err)
 *    })
 * 6、假数据
 *    在public文件目录
 *    创建 api/headerList.json
 * 
 *  原理： create-react-app 底层也是node服务器，当你访问 /api/headerList.json时，会先访问工程中的路由，如果找不到，
 *         则会去 public目录下找 /api/headerList.json，如果能找到就会拿出来并输出。
 *  通过这个特性，我们可以在这个public目录下写一些假数据。
 *  在开发时，一般会在public中写假数据，上线前把public目录下的api目录删除，在public目录下如果找不到文件后，就会去请求后端接口。
 * 
 * 7、成功拿到数据后，要把拿到的数据替换store中的list
 *  套路： action给到store,再给到reducer
 * 
 * 8、注意点：
 * 在 reducer中，
 * 当使用了immutable.js中的fromJS把state变成immutable对象后，则state中的list数组也将变成一个immutable数组。 
 * 所以defaultState中的list实际上是一个immutable的数组。
 * 所以，当你在使用 return state.set('list', action.data) 语法来改变 list时，action.data 实际上是一个普通数组。这样的话，数据类型就变了，肯定会出错。
 * 所以，需要把action.data变成immutable类型。
 * 可以在actionCreator中传递action.data时，把action.data使用 immutable.js中的 fromJS(action.data), 把action.data变成immutable类型。
 *  
 * 9、在组件中展示list数据
 *   this.props.list.map()
 * 
 * 回顾：
 * 重点1：
 * 把异步拆分到action中，就要求actionCreator不仅可以返回对象，而需要返回一个函数。
 * 如果你想actionCreator返回的结果能够是一个函数，必须使用 redux-thunk 中间件。
 * 重点2：
 * reducer中的 list，由于最外层包裹了一个 fromJS()，它把内部的list，从一个普通的数组变成一个immutable类型的数组。
 * 如果你想把接口返回的数据直接 return state.set('list', action.data)就会把list重新变成一个普通数组，这样不行。
 * 需要在actionCreator中传递action.data之前，把aciton.data也转换成immutable数组类型。
 * 上面2点，是使用immutable.js时，经常犯的错误。一定要注意。
 * 重点3：
 * 在组件中通过map()方法将数据循环展示到界面上。
 */
//#endregion

//#region 【代码优化微调】
/**
 * 1、在actionCreator中：
 * 由于changeList不需要被导出，而是直接被getList调用，建议大家要么放在顶部，要么放在底部
 * 2、在组件中，到处要用到 this.props.xxx
 * 可以使用解构赋值语法
 * const {focused, list, handleInputFocus, handleInputBlur } = this.props
 * 然后直接使用 focused变量即可。
 * 3、在reducer中，大量使用了if语句，
 * 使用 switch语句进行替换。更加简洁。
 * 
 */
//#endregion

//#region 【换一批 功能实现】
/** 在 reducer中，增加两个变量
 * page: 1,
 * totalPage: 1
 * 
 * 偏业务，可以查看代码查看具体逻辑。不做过多学习。
 * 
 * 注意: list是 immutable类型数组，不支持 list[i] 的形式获取数组元素。它有一个方法叫 toJS()，可以把immutable类型的数组，转换成普通类型数组。
 * 应该这样做： const newList = list.toJS()
 * 
 * 注意：加上newList.length判断是为了解决 key值初始为 undefined，根本点在于，list初始为空。
 * 
 * merge()方法可以同时修改多个 immutable对象。比连续使用多个set()性能更高。
 * state.merge({
 *  list: action.data,
 *  totalPage: action.totalPage
 * })
 * 
 */
//#endregion