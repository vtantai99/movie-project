import Axios from "axios";

import * as actions from "./actionTypes";

export const selectTheater = (codeFilm) => async (dispatch) => {
  dispatch(loadingTheater(true));
  try {
    const res = await Axios.get(
      `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${codeFilm}`
    );
    await dispatch(fetTheaterList(res.data));
    await setTimeout(() => dispatch(loadingTheater(false)), 300);
  } catch (err) {
    console.log(err);
  }
};
export const selectDay = (codeFilm) => {
  return (dispatch) => {
    Axios.get(
      `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${codeFilm}`
    )
      .then((res) => dispatch(fetDateList(res.data.heThongRapChieu)))
      .catch((err) => console.log(err));
  };
};

// Danh sach cum rap khi chon phim
const fetTheaterList = (listShowtime) => {
  return {
    type: actions.FETCH_THEATER_LIST,
    payload: listShowtime,
  };
};
// Danh sach ngay chieu khi chon rap
const fetDateList = (listShowTimes) => {
  return {
    type: actions.FETCH_DATE,
    payload: listShowTimes,
  };
};
export const getHoursList = () => {
  return {
    type: actions.GET_HOURS_LIST,
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
export const addCode = (code) => {
  return {
    type: actions.ADD_CODE,
    payload: code,
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
// loading khi chon phim
const loadingTheater = (value) => {
  return {
    type: actions.LOADING_THEATER,
    payload: value,
  };
};
