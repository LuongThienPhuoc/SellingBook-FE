import * as type from '../types'

export const loadingBook = (books) => dispatch => {
    dispatch({
        type: type.GET_ALL_BOOKS,
        books: books,
    })
}

export const loadingCurrentBook = (book) => dispatch => {
    dispatch({
        type: type.GET_BOOK_BY_SLUG,
        book: book,
    })
}