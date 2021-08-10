import * as actions from "../action/movieAdminAction/actionTypes";

const initialState = {
  movieList: [],
  searchTerm: "",
  modalMovie: { statusModal: false },
};

export default function movieReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.FETCH_MOVIE_LIST:
      return { ...state, movieList: payload };
    case actions.UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case actions.MODAL_MOVIE:
      return { ...state, modalMovie: payload };
    default:
      return state;
  }
}
