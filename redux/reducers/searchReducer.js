import * as type from '../types'

const initalState = {
    search: '',
    currentFilter: {
        categoryList: [],
        sellRange: -1,
    }
}

const searchReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.SET_SEARCH:
            return {
                ...state,
                search: action.search
            }
        case type.SET_CATEGORY_FILTER:
            return {
                ...state,
                currentFilter: {
                    ...state.currentFilter,
                    categoryList: action.categoryList,
                }
            }
        case type.SET_SELL_RANGE:
            // console.log("sellRange", sellRange);
            return {
                ...state,
                currentFilter: {
                    ...state.currentFilter,
                    sellRange: action.sellRange
                }
            }
        default:
            return state
    }
}

export default searchReducer