import Axios from "axios";
import { startLoading, stopLoading } from "../commonAction/actions";
import { fetchMovieDetailRequest } from "../movieDetailAction/actions";
import * as actions from "./actionTypes";
export const fetchMovieList = () => {
  return (dispatch) => {
    dispatch(startLoading());
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    )
      .then((res) => {
        dispatch(fetchMovieListSuccess(res.data));
        dispatch(stopLoading());
      })

      .catch((err) => console.log(err));
  };
};
export const selectMovie = (codeFilm) => {
  return (dispatch) => {
    dispatch(fetchMovieDetailRequest(codeFilm));
    return {
      type: actions.SELECT_MOVIE,
      payload: codeFilm,
    };
  };
};
export const fetchTheaterList = () => {
  return (dispatch) => {
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
    )
      .then((res) => dispatch(fetchCodeTheaterSuccess(res.data)))
      .catch((err) => console.log(err));
  };
};
const fetchMovieListSuccess = (movieList) => {
  return {
    type: actions.FETCH_MOVIE_LIST,
    payload: movieList,
  };
};
const fetchCodeTheaterSuccess = (nameTheater) => {
  console.log(nameTheater);
  return {
    type: actions.FETCH_THEATER_LIST,
    payload: nameTheater,
  };
};
