import * as actions from '../action/movieAction/actionTypes';

const initalState = {
    movieDetail: '',
    movieTrailer: '',
}

export default function movieReducer(state = initalState, action) {
    switch(action.type) {
        case actions.FETCH_MOVIE_DETAIL: return {...state, movieDetail: action.payload};
        case actions.GET_MOVIE_TRAILER:
            case actions.DROP_MOVIE_TRAILER:return {...state, movieTrailer: action.payload};
        default: return state;
    }
}