import { userActionType } from "../_constants/typeAction";


let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {loggedIn: true, user} : {};


export const authentication = (state = initialState, action) =>{
switch (action.type) {
    case userActionType.LOGIN_REQUEST:
        return{
            loggingIn: true,
            user: action.user
        };
    case userActionType.LOGIN_SUCCESS:
        return{
            loggedIn: true,
            user: action.user
        };
    case userActionType.LOGIN_FAILURE:
        return{};
    case userActionType.LOGOUT:
        return{};
    default: 
        return state
}
}