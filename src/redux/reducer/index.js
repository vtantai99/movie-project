import { combineReducers } from "redux";
import movieDetailReducer from "./movieDetailReducer";
import commonReducer from "./commonReducer";
import userReducer from "./userReducer";
import heThongRapReducer from "./heThongRapReducer";
import bookingReducer from "./bookingReducer";
import movieListReducer from "./movieListReducer";
import searchMovieReducer from "./searchMovieReducer";
import themeReducer from "./themeReducer";
import adminReducer from "./adminReducer";
export default combineReducers({
  adminReducer,
  userReducer,
  searchMovieReducer,
  movieListReducer,
  heThongRapReducer,
  movieDetailReducer,
  bookingReducer,
  commonReducer,
  themeReducer,
});
