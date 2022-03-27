import * as type from '../types'

export const userLogin = () => dispathch => {
    dispathch({
        type: type.USER_LOGIN_SUCCESS,
    })
}

export const userLogout = () => dispatch => {
    dispatch({
        type: type.USER_LOGOUT_SUCCESS
    })
}
