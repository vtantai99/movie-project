import * as actions from '../action/movieAction/actionTypes';

const initalState = {
    movieDetail: '',
}

export default function movieReducer(state = initalState, action) {
    switch(action.type) {
        case actions.FETCH_MOVIE_DETAIL: return {...state, movieDetail: action.payload};
        default: return state;
    }
}