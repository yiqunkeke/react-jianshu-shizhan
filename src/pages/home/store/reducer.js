import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
   topicList: [],
   articleList: [],
   recommendImg: [],
   writterList: [],
   page: 1,
   totalPage: 2,
   showScroll: false
})

const changeHomeData = (state, action) => {
    return state.merge({
        topicList:  fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendImg: fromJS(action.recommendImg),
        writterList: fromJS(action.writterList)
    })  
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_PAGE:
            // console.log(action.page)
            return state.set('page', action.page)
        case constants.CHANGE_HOME_DATA:
            // console.log(action)
            return  changeHomeData(state, action)
        case constants.ADD_ARTICLE_LIST:
            return state.set('articleList', state.get('articleList').concat(action.list))     
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)     
        default:
            return state
    }
}
