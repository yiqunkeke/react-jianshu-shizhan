import axios from 'axios'
import * as constants from './constants'
import {fromJS} from 'immutable'

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendImg: result.recommendImg,
    writterList: result.writterList
})

const addHomeList = (list) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list)
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((res)=>{
                const result = res.data.data
                dispatch(changeHomeData(result))
            })
    }
}

export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json')
            .then((res)=>{
                const result = res.data.data
                console.log(result);
                dispatch(addHomeList(result))
            })
    }
}

export const toggleTopShow = (show) => {
    return {
        type: constants.TOGGLE_SCROLL_TOP,
        show
    }
}