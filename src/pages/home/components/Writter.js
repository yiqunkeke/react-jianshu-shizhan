import React, { PureComponent } from 'react'
import {WritterWrapper,WritterTitle,WritterSwitch, WritterItem, WritterFocus, WriiterText, WritterAll} from '../style'
import {connect} from 'react-redux'
import { actionCreators } from '../store'

class Writter extends PureComponent {
    render() {
        const { list, page, totalPage, handleChangePage } = this.props
        const newList = list.toJS()
        let pageList = []
        if(newList.length) {
            for(let i = (page - 1) * 5; i < page * 5; i++ ) {
                pageList.push(
                    <WritterItem key={newList[i].id}>
                        <img alt="img" className="pic" src={newList[i].imgUrl}/>
                        <WritterFocus>+ 关注</WritterFocus>
                        <WriiterText>
                            <h3 className="title">{newList[i].title}</h3>
                            <p className="desc">写了{newList[i].words}字 · {newList[i].fav}喜欢</p>
                        </WriiterText>
                    </WritterItem>
                )
            }
        }
        return (
            <WritterWrapper>
                <WritterTitle>
                    推荐作者
                    <WritterSwitch onClick={()=>handleChangePage(page, totalPage, this.spinIcon)}>
                        <i className="iconfont" ref={(icon) => {this.spinIcon = icon}}>&#xe606;</i>
                        换一批
                    </WritterSwitch>
                </WritterTitle>
                {/* {
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
                } */}
                { pageList }
                <WritterAll>查看全部 &gt;</WritterAll>
            </WritterWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'writterList']),
        page: state.getIn(['home', 'page']),
        totalPage: state.getIn(['home', 'totalPage'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        handleChangePage(page, totalPage, spin) {
            // console.log(page, totalPage)
            // console.log(spin)
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            if(originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)'


            if(page < totalPage) {
                dispatch(actionCreators.changePage(page+1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}

export default connect(mapState, mapDispatch)(Writter)