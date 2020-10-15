import React, { PureComponent } from 'react'
import {ListItem, ListInfo, LoadMore} from '../style'
import {connect} from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
    render() {
        const { list, getMoreList } = this.props
        return (
            <div>
                {
                    list.map((item, index) => {
                        return(
                            // 使用 react-router-dom 提供的<Link>组件跳转--单页应用--不会请求文档
                            // 使用a标签跳转会请求多一个文档，不是单页应用
                            
                            // 【1】静态路由
                            // <Link to="/detail" key={index}>

                            // 【2】动态路由传参：
                                // a.在此处传递参数 
                                // b.在App.js中<Route path='/detail/:id' exact component={Detail}></Route> 
                                // c.在detail/index.js组件中接收参数：【this.props.match.params.id】
                            // <Link to={"/detail/" + item.get('id')} key={index}>

                            // 【3】另一种方式传参：
                                // a. 在此处通过 ?id= 形式传递参数
                                // b. 在App.js中 <Route path='/detail' exact component={Detail}></Route>
                                // c. 在detail/index.js组件中接收参数： 【this.props.location.search 可以获取到 '?id=1' 】
                                // 这种 ?id= 方式获取id需要程序员手动去解析获取id。有点麻烦
                                // 所以建议直接使用动态路由的方式【2】传递参数 
                            // <Link to={"/detail?id=" + item.get('id')} key={index}>
                            
                            <Link to={"/detail/" + item.get('id')} key={index}>
                                <ListItem>
                                    <img alt="img" className="pic"
                                    src={item.get('imgUrl')}/>     
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={getMoreList}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'articleList'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        getMoreList() {
            dispatch(actionCreators.getMoreList())
        }
    }
}

export default connect(mapState, mapDispatch)(List)