import * as type from '../types'
import { setAccessToken } from '../../utils/cookies'
export const userLogin = (data) => dispathch => {
    console.log(data)
    setAccessToken(data.token)
    dispathch({
        type: type.USER_LOGIN_SUCCESS,
        infoUser: data.data
    })
}

export const userLogout = () => dispatch => {
    dispatch({
        type: type.USER_LOGOUT_SUCCESS
    })
}
