import * as actions from '../action/movieAction/actionTypes';

const initialState = {
    selectedMovie: [],
    movieList:[],
    searchTerm:"",
}

export default function movieReducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type){
        case actions.SELECT_MOVIE: return {...state, selectedMovie:payload}
        case actions.FETCH_MOVIE_LIST: return{...state,movieList:payload}
        case actions.UPDATE_SEARCH_TERM: return {...state,searchTerm:payload}
        default: return state;
    }
}