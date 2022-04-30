import { combineReducers } from "redux";
import postReducer from './postReducer'
import codeReducer from './codeReducer'
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
import searchReducer from "./searchReducer";
const rootReducer = combineReducers({
    postReducer: postReducer,
    codeReducer,
    userReducer,
    alertReducer,
    searchReducer
})

export default rootReducer