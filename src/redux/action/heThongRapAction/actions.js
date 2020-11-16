import * as actions from './actionTypes';

const switchRap = (rap) => {
    return{
        type: actions.SWITCH_RAP,
        payload: rap,
    }
}

export {switchRap};