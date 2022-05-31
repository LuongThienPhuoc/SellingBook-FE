import * as type from '../types'

const initalState = {
    cart: [],
    isLoading: false,
}

const cartReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.GET_CART_USER:
            return {
                ...state,
                cart: action.cart,
                isLoading: true,
            }
        case type.LOGOUT_CART:
            return {
                ...state,
                cart: [],
                isLoading: false,
            }
        default:
            return state
    }
}

export default cartReducer