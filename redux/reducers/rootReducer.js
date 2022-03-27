import { combineReducers } from "redux";
import postReducer from './postReducer'
import codeReducer from './codeReducer'
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
    postReducer: postReducer,
    codeReducer,
    userReducer,
    alertReducer,
})

export default rootReducer