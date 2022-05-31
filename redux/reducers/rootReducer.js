import { combineReducers } from "redux";
import postReducer from './postReducer'
import codeReducer from './codeReducer'
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
import searchReducer from "./searchReducer";
import cart from './cartReducer'

const rootReducer = combineReducers({
    postReducer: postReducer,
    codeReducer,
    userReducer,
    alertReducer,
    searchReducer,
    cart
})

export default rootReducer