import * as type from '../types'

export const setSearch = (search) => async dispathch => {
    dispathch({
        type: type.SET_SEARCH,
        search
    })
}

export const changeCategoryFilter = (categoryList) => async dispatch => {
    dispatch({
        type: type.SET_CATEGORY_FILTER,
        categoryList
    })
}

export const setSellRange = (sellRange) => async dispatch => {
    dispatch({
        type: type.SET_SELL_RANGE,
        sellRange
    })
}
