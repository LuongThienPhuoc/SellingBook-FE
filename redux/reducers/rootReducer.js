import { combineReducers } from "redux";
import postReducer from './postReducer'
import codeReducer from './codeReducer'
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    postReducer: postReducer,
    codeReducer,
    userReducer
})

export default rootReducer