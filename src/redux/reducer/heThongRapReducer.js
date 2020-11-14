import * as actions from '../../redux/action/heThongRapAction/actionTypes';

const intialState = {
    rap:"BHDStar",
}

export default function heThongRapReducer(state = intialState, action) {
    switch(action.type) {
        case actions.SWITCH_RAP: return {...state, rap: action.payload};
        default: return state;
    }
}