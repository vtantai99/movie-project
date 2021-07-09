import {
  GET_SHOWING_LIST,
  GET_COMING_LIST,
} from "../action/movieListAction/actionTypes";
const initialState = {
  showingList: [],
  comingList: [],
};
const movieListReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_SHOWING_LIST: {
      return { ...state, showingList: payload };
    }
    case GET_COMING_LIST: {
      return { ...state, comingList: payload };
    }
    default:
      return state;
  }
};
export default movieListReducer;
