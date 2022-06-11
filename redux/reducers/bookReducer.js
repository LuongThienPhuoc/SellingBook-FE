import * as type from '../types'

const initalState = {
    books: [],
    currentBook: {},
    tags: [],
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
        case type.SET_ALL_TAGS:
            return {
                ...state,
                tags: action.tags
            }
        default:
            return state
    }
}

export default bookReducer