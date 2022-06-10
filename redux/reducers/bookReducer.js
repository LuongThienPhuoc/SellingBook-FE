import * as type from '../types'

const initalState = {
    books: [],
    currentBook: {}
}

const bookReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.GET_ALL_BOOKS:
            return {
                ...state,
                books: action.books
            }
        case type.GET_BOOK_BY_SLUG:
            return {
                ...state,
                currentBook: action.book
            }
        default:
            return state
    }
}

export default bookReducer