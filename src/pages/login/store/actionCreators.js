import axios from 'axios'
import * as constants from './constants'

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const login = (accout, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + accout + '&password=' + password)
        .then((res)=> {
            console.log(res)
            const result = res.data.data
            if(result) {
                dispatch(changeLogin())
            } else {
                alert('登录失败')
            }

        })
    }
}