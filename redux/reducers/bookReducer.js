import * as type from '../types'

const initalState = {
    books: [],
}

const bookReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.GET_ALL_BOOKS:
            return {
                ...state,
                books: action.books
            }
        default:
            return state
    }
}

export default bookReducer