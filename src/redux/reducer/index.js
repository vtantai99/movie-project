import { combineReducers } from "redux";
import movieDetailReducer from "./movieDetailReducer";
import commonReducer from "./commonReducer";
import userReducer from "./userReducer";
import heThongRapReducer from "./heThongRapReducer";
import bookingReducer from "./bookingReducer";
import movieListReducer from "./movieListReducer";
import searchMovieReducer from "./searchMovieReducer";
export default combineReducers({
  userReducer,
  searchMovieReducer,
  movieListReducer,
  heThongRapReducer,
  movieDetailReducer,
  bookingReducer,
  commonReducer,
});
