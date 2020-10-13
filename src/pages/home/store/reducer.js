import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
   topicList: [],
   articleList: [],
   recommendImg: [],
   writterList: [],
   page: 1,
   totalPage: 2
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_PAGE:
            // console.log(action.page)
            return state.set('page', action.page)
        case constants.CHANGE_HOME_DATA:
            // console.log(action)
            return  state.merge({
                topicList:  fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendImg: fromJS(action.recommendImg),
                writterList: fromJS(action.writterList)
            })   
        default:
            return state
    }
}