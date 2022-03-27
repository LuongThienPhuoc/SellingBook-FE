import { combineReducers } from "redux";
import postReducer from './postReducer'
import codeReducer from './codeReducer'

const rootReducer = combineReducers({
    postReducer: postReducer,
    codeReducer,
})

export default rootReducer