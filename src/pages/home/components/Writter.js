import React, { Component } from 'react'
import {WritterWrapper,WritterTitle,WritterSwitch, WritterItem,WriiterText} from '../style'

class Writter extends Component {
    render() {
        return (
            <WritterWrapper>
                <WritterTitle>
                    推荐作者
                    <WritterSwitch>
                        <i className="iconfont">&#xe606;</i>
                        换一批
                    </WritterSwitch>
                </WritterTitle>
                <WritterItem>
                    <img alt="img" className="pic" src="https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
                    <a href="#" className="focuson">+ 关注</a>
                    <WriiterText>
                        <h3 className="title">澜夜师兄</h3>
                        <p className="desc">写了193.8k字 · 2k喜欢</p>
                    </WriiterText>
                </WritterItem>
            </WritterWrapper>
        )
    }
}

export default Writter