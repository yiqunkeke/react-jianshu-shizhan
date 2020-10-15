import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends PureComponent {
    // 由于connect与store进行了连接，则store中任何数据的改变都会重新执行render函数。--影响性能
    // 避免虚拟dom的比对，提高组件性能
    // shouldComponentUpdate() {
    // }
    // 使用 react中的 PureComponent，其底层内部自己实现了一个shouldComponentUpdate。
    // 这样无需我们手写shouldComponentUpdate做性能优化了。
    // 注意：这里能够使用PureComponent，是因为在这个项目中，使用了第三方库immutable.js去管理数据。immutable.js与PureComponent结合使用没有任何问题。
    // 但是，如果没有使用immutable.js，单独使用PureComponent时，有时会踩坑。
    // 建议：如果使用PureComponent，建议使用immutable.js来管理数据。不然的话，建议使用Component，虽然性能低一些，但是可以自己写shouldComponentUpdate做性能优化。

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
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null }
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents() // 绑定全局事件
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow) // 当组件销毁时，把全局的事件绑定给解绑去除。这样的话，该组件中的事情就不会影响其他组件。
    }

    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getHomeInfo())
        },
        changeScrollTopShow(e) {
            // console.log(e)
            // console.log(document.documentElement.scrollTop)
            // 大于400，显示“顶部”
            if(document.documentElement.scrollTop) {
                dispatch(actionCreators.toggleTopShow(true))
            } else {
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    }
}

export default connect(mapState, mapDispatch)(Home)
