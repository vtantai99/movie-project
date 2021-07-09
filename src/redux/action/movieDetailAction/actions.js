import * as actions from "./actionTypes";
import { startLoading, stopLoading } from "../commonAction/actions";
import axios from "axios";
import swal from "sweetalert";
//Hàm lấy thông tin phim bằng mã phim
const fetchMovieDetailRequest = (movieCode, history) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const res = await axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
      method: "GET",
    });
    if (res.status == 200 || res.status == 201) {
      const data = await res.data;
      await dispatch(fetchMovieDetailSuccess(data));
      await dispatch(stopLoading());
    }
  } catch (err) {
    swal({
      title: "Không tìm thấy phim",
      icon: "warning",
      buttons: {
        confirm: "Trang chủ",
      },
    }).then((yes) => {
      history.push("/");
    });
  }
};
// Hàm này confirm đã lấy xong thông tin phim sau đó render ra page detail
const fetchMovieDetailSuccess = (movieDetail) => (dispatch) => {
  dispatch({
    type: actions.FETCH_MOVIE_DETAIL,
    payload: movieDetail,
  });
};
// Hàm lấy link youtube để open trailer
const getMovieTrailer = (trailer) => {
  return {
    type: actions.GET_MOVIE_TRAILER,
    payload: trailer,
  };
};
// Hàm này close trailer khi click bên ngoài or nút close
const dropMovieTrailer = () => {
  return {
    type: actions.DROP_MOVIE_TRAILER,
    payload: null,
  };
};
// Hàm này lấy ngày hiện tại để dispatch lên redux
const getDateCurrent = (date) => {
  return {
    type: actions.GET_DATE_CURRENT,
    payload: date,
  };
};
// Hàm refresh lại date khi f5 detail page hoặc khi return thì ngày sẽ lấy ngày hiện tại
const refreshDate = (date) => {
  return {
    type: actions.REFRESH_DATE,
    payload: date,
  };
};
// Hàm update rạp khi chọn rạp
const updateCodeTheater = (code) => {
  return {
    type: actions.UPDATE_CODE_THEATER,
    payload: code,
  };
};
// Hàm update rạp khi chọn rạp ở mobile
const updateCodeTheaterMobile = (code) => {
  return {
    type: actions.UPDATE_CODE_THEATER_MOBILE,
    payload: code,
  };
};
export {
  fetchMovieDetailRequest,
  getMovieTrailer,
  dropMovieTrailer,
  getDateCurrent,
  updateCodeTheater,
  updateCodeTheaterMobile,
  refreshDate,
};
