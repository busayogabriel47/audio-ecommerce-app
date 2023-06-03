//import action from actionTypes
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE
} from "./types"

//import api from services/api
import * as api from "../api/api";


//signup auth action
export const signup = ({formData}) => (dispatch) => {
    return api.register({formData}).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload:response.data.message
            });

            return Promise.resolve();
        },
        (error)=> {
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.message) || 
            error.message || 
            error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            })

            return Promise.reject();
        }
    )
}



//login auth action
export const login = (username, password) => (dispatch) => {
    return api.logIn(username, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {user: data}
            });

            return Promise.resolve();
        },
        (error)=> {
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.message) || 
            error.message || 
            error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            })

            return Promise.reject();
        }
    )
}


export const logout = () => (dispatch) => {
    api.logout();

    dispatch({
        type: LOGOUT,
    });
};
