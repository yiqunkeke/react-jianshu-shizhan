import React, { Component } from 'react'
import {ListItem, ListInfo, LoadMore} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'

class List extends Component {
    render() {
        const { list, getMoreList } = this.props
        return (
            <div>
                {
                    list.map((item, index) => {
                        return(
                            <ListItem key={index}>
                                <img alt="img" className="pic"
                                src={item.get('imgUrl')}/>     
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
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