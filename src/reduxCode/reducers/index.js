import {combineReducers} from "redux";
import {authReducer} from "./auth";
import message from './message';

//combine all reducers here

export default combineReducers({
    authReducer,
    message
})