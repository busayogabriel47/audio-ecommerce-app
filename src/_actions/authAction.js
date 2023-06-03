import {userActionType} from '../_constants/typeAction';
import {alertAction} from './alertAction'
import * as api from '../_service/_userService';
import {history} from '../_service/navigate'



export const register = (user) => {

    return dispatch => {
        dispatch(request(user));

        api.register(user)
        .then(
            user => {
                dispatch(success());
                history.push('/login')
                dispatch(alertAction.success('Registration successful'));
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertAction.error(error.toString()));
            }
        );
    }


    function request(user) { return { type: userActionType.REGISTER_REQUEST, user } }
    function success(user) { return { type: userActionType.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userActionType.REGISTER_FAILURE, error } }
}


export const login = (username, password) => {
    return dispatch => {
        dispatch(request({username}));

        api.login(username, password)
        .then(
            user=> {
                dispatch(success(user));
                history.push("/profile")
            },
            error=>{
                dispatch(failure(error.toString()));
                dispatch(alertAction.error(error.toString()))
            }
        )
    }

    function request(user) {
        return{type: userActionType.LOGIN_REQUEST, user}}
    function success(user) {
            return{type: userActionType.LOGIN_SUCCESS, user}}
    function failure(error) {return {type: userActionType.LOGIN_FAIL, error}}

}


export const logout = () => {
    api.logout();   
    return{type: userActionType.LOGOUT};
}