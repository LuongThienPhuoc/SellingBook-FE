import * as type from '../types'

export const loadingCart = (cart) => dispathch => {
    dispathch({
        type: type.GET_CART_USER,
        cart,
    })
}

export const loagoutCart = () => dispathch => {
    dispathch({
        type: type.LOGOUT_CART,
    })
}

