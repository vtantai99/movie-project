import * as actions from "../action/movieDetailAction/actionTypes";

const initialState = {
  movieDetail: "",
  movieTrailer: null,
  dateShow: `${new Date().getDate()}`,
  codeTheater: "BHDStar",
  loadingTicketAdmin: false,
};
export default function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case actions.FETCH_MOVIE_DETAIL:
      return { ...state, movieDetail: payload };
    case actions.GET_MOVIE_TRAILER:
      return { ...state, movieTrailer: payload };
    case actions.DROP_MOVIE_TRAILER:
      return { ...state, movieTrailer: payload };
    case actions.GET_DATE_CURRENT:
      return { ...state, dateShow: payload };
    case actions.REFRESH_DATE:
      return { ...state, dateShow: payload };
    case actions.UPDATE_CODE_THEATER:
      return { ...state, codeTheater: payload };
    case actions.LOADING_TICKET_ADMIN:
      return { ...state, loadingTicketAdmin: payload };
    default:
      return state;
  }
}
