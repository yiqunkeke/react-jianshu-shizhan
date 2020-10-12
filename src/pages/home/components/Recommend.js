import React, { Component } from 'react'
import {RecommendWrapper} from '../style'
import {connect} from 'react-redux'

class Recommend extends Component {
    render() {
        const { list } = this.props
        return (
            <RecommendWrapper>
                {
                    list.map(item=><img src={item.get('imgUrl')} alt="" className="pic" key={item.get('imgUrl')}/>)
                }
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'recommendImg'])
    }
}

export default connect(mapState)(Recommend)