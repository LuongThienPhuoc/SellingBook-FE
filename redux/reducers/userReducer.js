import * as type from '../types'

const initalState = {
    isLogin: false,
}

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
            }
        case type.USER_LOGOUT_SUCCESS:
            return {
                ...state,
                isLogin: false,
            }
        default:
            return state
    }
}

export default userReducer