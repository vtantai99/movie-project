import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
} from "../action/movieListAction/actionTypes";

const initialState = {
  movieList: [],
};
export const movieListReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_MOVIE_LIST_SUCCESS: {
      return { ...state, movieList: payload };
    }
    default:
      return state;
  }
};
