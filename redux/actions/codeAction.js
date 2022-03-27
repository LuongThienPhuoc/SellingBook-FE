import * as type from '../types'

export const getCode = (code, email) => dispathch => {
    dispathch({
        type: type.GET_CODE,
        payload: {
            code,
            email
        }
    })
}


export const getCodeAgain = (code) => dispatch => {
    dispatch({
        type: type.GET_CODE_AGAIN,
        payload: {
            code
        }
    })
}