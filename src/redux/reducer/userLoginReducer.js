import * as actions from '../action/userLoginAction/actionTypes';

const initalState = {
    user: null,
    isLogined: false,
    error: '',
}

export default function userLoginReducer(state = initalState, action) {
    switch(action.type) {
        case actions.LOGIN: {
            const {user, isLogined} = action.payload;
            return {...state, user, isLogined};
        }
        case actions.SHOW_ERROR:
            case actions.HIDE_ERROR: return{...state, error: action.payload};
        default: return state;
    }
} 
