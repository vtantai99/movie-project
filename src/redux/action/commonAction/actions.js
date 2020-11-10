import * as actions from './actionTypes';


const startLoading = () => {
    return{
        type: actions.START_LOADING,
        payload: true,
    }
}

const stopLoading = () => {
    return{
        type: actions.STOP_LOADING,
        payload: false,
    }
}

export {startLoading,stopLoading};