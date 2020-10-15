import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends PureComponent {

    render() {
        console.log(this.props)
        // console.log(this.props.match.params.id)
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                {/* 不要转义字符串内容 */}
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
                    {/* {this.props.content} */}
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapState = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        getDetail(id) {
            dispatch(actionCreators.getDetail(id))
        }
    }
}

export default connect(mapState, mapDispatch)(Detail)