import React, { Component } from 'react'
import {WritterWrapper,WritterTitle,WritterSwitch, WritterItem, WritterFocus, WriiterText, WritterAll} from '../style'
import {connect} from 'react-redux'

class Writter extends Component {
    render() {
        const { list } = this.props
        return (
            <WritterWrapper>
                <WritterTitle>
                    推荐作者
                    <WritterSwitch>
                        <i className="iconfont">&#xe606;</i>
                        换一批
                    </WritterSwitch>
                </WritterTitle>
                {
                    list.map(item => (
                        <WritterItem key={item.get('id')}>
                            <img alt="img" className="pic" src={item.get('imgUrl')}/>
                            <WritterFocus>+ 关注</WritterFocus>
                            <WriiterText>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">写了{item.get('words')}字 · {item.get('fav')}喜欢</p>
                            </WriiterText>
                        </WritterItem>
                    ))
                }
                <WritterAll>查看全部 ></WritterAll>
            </WritterWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'writterList'])
    }
}

export default connect(mapState)(Writter)