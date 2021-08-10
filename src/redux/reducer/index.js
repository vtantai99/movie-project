import { combineReducers } from "redux";
import movieDetailReducer from "./movieDetailReducer";
import commonReducer from "./commonReducer";
import userReducer from "./userReducer";
import heThongRapReducer from "./heThongRapReducer";
import bookingReducer from "./bookingReducer";
import movieListReducer from "./movieListReducer";
import movieAdminReducer from "./movieAdminReducer";
import searchMovieReducer from "./searchMovieReducer";
import themeReducer from "./themeReducer";
import adminReducer from "./adminReducer";
import voteReducer from "./voteReducer";

export default combineReducers({
  adminReducer,
  userReducer,
  searchMovieReducer,
  movieListReducer,
  heThongRapReducer,
  movieDetailReducer,
  movieAdminReducer,
  bookingReducer,
  commonReducer,
  themeReducer,
  voteReducer,
});
