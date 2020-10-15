import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import {actionCreators} from './store'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
    render() {
        const { loginStatus } = this.props
        console.log(loginStatus)
        if(loginStatus) {
            // 如果已经登录，则返回首页
            return <Redirect to="/"></Redirect>
        } else {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input)=>{this.account = input}}/>
                        <Input placeholder="密码" type="password" ref={(input)=>{this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
    }
}

const mapState = (state) => {
    return {
        loginStatus: state.getIn(['login', 'login'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        login(accoutElem, passwordElem) {
            // console.log(accoutElem.value)
            // console.log(passwordElem.value)
            dispatch(actionCreators.login(accoutElem.value, passwordElem.value))
        }
    }
}

export default connect(mapState, mapDispatch)(Login)