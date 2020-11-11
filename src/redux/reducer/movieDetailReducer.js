import * as actions from '../action/movieDetailAction/actionTypes';

const initalState = {
    movieDetail: '',
    movieTrailer: '',
    movieDetailNav: 'lichChieu',
}

export default function movieReducer(state = initalState, action) {
    switch(action.type) {
        case actions.FETCH_MOVIE_DETAIL: return {...state, movieDetail: action.payload};
        case actions.GET_MOVIE_TRAILER:
            case actions.DROP_MOVIE_TRAILER:return {...state, movieTrailer: action.payload};
            case actions.SWITCH_MOVIE_DETAIL_NAV: return {...state, movieDetailNav: action.payload};
        default: return state;
    }
}