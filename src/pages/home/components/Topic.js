import React, { Component } from 'react'
import {TopicWrapper, TopicItem} from '../style'
import { connect } from 'react-redux'

class Topic extends Component {
    render() {
        const { list } = this.props
        return (
            <TopicWrapper>
                {
                    list.map(item => (
                        <TopicItem key={item.get('id')}>
                            <img src={item.get('imgUrl')}
                            className="topic-pic"
                            alt="img"/>
                            {item.get('title')}
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps =  (state) => {
    return {
        list: state.getIn(['home', 'topicList'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)