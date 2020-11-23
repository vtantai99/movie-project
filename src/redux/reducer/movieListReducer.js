import {
  GET_SHOWING_LIST,
  GET_COMING_LIST,
  GET_SEARCH_LIST,
} from "../action/movieListAction/actionTypes";

const initialState = {
  showingList: [],
  comingList: [],
  searchList: [],
};
export const movieListReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_SHOWING_LIST: {
      return { ...state, showingList: payload };
    }
    case GET_COMING_LIST: {
      return { ...state, comingList: payload };
    }
    case GET_SEARCH_LIST: {
      return { ...state, searchList: payload };
    }
    default:
      return state;
  }
};
