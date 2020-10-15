import React, { Component } from 'react'
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    SearchWrapper,
    NavSearch, 
    SearchInfo, 
    SearchInfoTitle, 
    SearchInfoSwitch, 
    SearchInfoList,
    SearchInfoItem, 
    Adition, 
    Button
} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators }  from './store' 
import { Link } from 'react-router-dom'


class Header extends Component {

    getListArea = () => {
        const {focusd, list, mouseIn, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
        const newList = list.toJS()
        const pageList = []

        if(newList.length) {
            // 加上newList.length判断是为了解决 key值初始为 undefined，根本点在于，list初始为空。
            for(let i = (page-1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if(focusd || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=> handleChangePage(page, totalPage, this.spinIcon)}>
                            <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe606;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    render() {
        const {focusd, list, login, handleInputFocus, handleInputBlur} = this.props
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        login ? 
                        <NavItem className='right'>退出</NavItem> : 
                        <Link to="/login"><NavItem className='right'>登录</NavItem></Link>
                    }
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focusd}
                            timeout={200}
                            classNames="slide">
                                {/* CSSTransition 会自动给内部组件添加一些固定样式。
                                    如 slide-enter、slide-enter-active、slide-exit、slide-exit-active等
                                */}
                            <NavSearch 
                                className={focusd ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                                >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focusd ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe637;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Adition>
                    <Button className='writting'>
                        <i className='iconfont'>&#xe708;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Adition>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        // focusd: state.header.get('focusd') //  这种获取数据的方式非常不统一：包含了对象调用属性和方法调用两种方式混合。可以使用 redux-immutable来统一数据格式。
        
        // 使用了 redux-immutable之后，这里的state就是一个immutable对象了，可以调用get方法了
        // focusd: state.get('header').get('focusd')
        // 等价于
        focusd: state.getIn(['header', 'focusd']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // 避免无意义的发送请求，提升组件性能
            if(list.size === 0) {
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage, spin) {
            // console.log(page, totalPage, spin)
            // console.log(spin.style.transform)
            
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            // 如果 spin.style.transform 获取到的字符串中，把不是0-9数字的字符，都替换成''，就可以取到一个纯数字的度数了
            // console.log(originAngle)
            
            if(originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)'

            if(page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)