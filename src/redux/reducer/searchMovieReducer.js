import * as actionTypes from "../action/searchMovieAction/actionTypes";
const initialState = {
  listFilm: [],
  codeFilm: "",
  listTheater: [],
  nameTheater: "",
};
const searchMovieReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_MOVIE_LIST: {
      return { ...state, listFilm: payload };
    }
    case actionTypes.SELECT_MOVIE: {
      return { ...state, codeFilm: payload };
    }
    case actionTypes.FETCH_THEATER_LIST: {
      //   console.log(payload);
      return { ...state, listTheater: payload };
    }
    default:
      return state;
  }
};
export default searchMovieReducer;
