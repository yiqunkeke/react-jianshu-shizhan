import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img  className="banner-img" alt="img"
                    src="https://upload.jianshu.io/admin_banners/web_images/5005/a1f341855d6e765fc0987b2826b1635fe39843f0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writter></Writter>
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData()
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getHomeInfo())
        }
    }
}

export default connect(null, mapDispatch)(Home)