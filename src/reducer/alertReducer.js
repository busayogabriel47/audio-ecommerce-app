import { alertAction } from "../_actions/alertAction";


export const alert = (state = {}, action) => {
    switch(action.type){
        case alertAction.success:
            return{
                type: 'alert-success',
                message: action.message
            };
        case alertAction.error:
            return{
                type: 'alert-danger',
                message: action.message
            };
        case alertAction.clear:
            return{};
        default: 
            return state
    }
}