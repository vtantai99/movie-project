import Axios from "axios";

import * as actions from "./actionTypes";
export const fetchMovieList = () => {
  return (dispatch) => {
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09"
    )
      .then((res) => {
        dispatch(fetchMovieListSuccess(res.data));
      })

      .catch((err) => console.log(err));
  };
};
export const selectTheater = (codeFilm) => {
  return (dispatch) => {
    dispatch(startLoading());
    Axios.get(
      `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${codeFilm}`
    )
      .then(
        (res) => dispatch(fetchTheaterListSelected(res.data)),
        // dispatch(stopLoading())
        setTimeout(() => {
          dispatch(stopLoading());
        }, 1000)
      )
      .catch((err) => console.log(err));
  };
};
export const selectDay = (codeFilm) => {
  return (dispatch) => {
    Axios.get(
      `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${codeFilm}`
    )
      .then((res) => dispatch(fetchShowTimesList(res.data.heThongRapChieu)))
      .catch((err) => console.log(err));
  };
};

// Lay danh sach phim
const fetchMovieListSuccess = (movieList) => {
  return {
    type: actions.FETCH_MOVIE_LIST,
    payload: movieList,
  };
};
// Danh sach he thong rap tren API

// Danh sach cum rap khi chon phim
const fetchTheaterListSelected = (listShowtime) => {
  return {
    type: actions.FETCH_THEATER_LIST,
    payload: listShowtime,
  };
};
// Danh sach lich chieu khi chon rap
const fetchShowTimesList = (listShowTimes) => {
  return {
    type: actions.FETCH_THEATER_SHOWTIME,
    payload: listShowTimes,
  };
};
export const getHoursList = () => {
  return {
    type: actions.GET_HOURS_LIST,
  };
};
const startLoading = () => {
  return {
    type: actions.START_LOADING,
  };
};
const stopLoading = () => {
  return {
    type: actions.STOP_LOADING,
  };
};
export const addNameTheater = (nameTheater) => {
  return {
    type: actions.ADD_NAME_THEATER,
    payload: nameTheater,
  };
};
export const addNameMovie = (nameMovie) => {
  return {
    type: actions.ADD_NAME_MOVIE,
    payload: nameMovie,
  };
};
export const addNameDate = (nameDate) => {
  return {
    type: actions.ADD_NAME_DATE,
    payload: nameDate,
  };
};
export const addNameHours = (nameHours) => {
  return {
    type: actions.ADD_NAME_HOURS,
    payload: nameHours,
  };
};
export const refreshFilm = () => {
  return {
    type: actions.REFRESH_FILM,
  };
};
export const refreshTheater = () => {
  return {
    type: actions.REFRESH_THEATER,
  };
};
export const refreshDate = () => {
  return {
    type: actions.REFRESH_DATE,
  };
};
