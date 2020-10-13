import axios from 'axios'
import * as constants from './constants'

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

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((res)=>{
                const result = res.data.data
                dispatch(changeHomeData(result))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}