import { startLoading, stopLoading } from "../commonAction/actions";
import { GET_COMING_LIST, GET_SHOWING_LIST } from "./actionTypes";
import axios from "axios";

export const getMovieListRequest = (showing, coming) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${showing}`
      )
      .then((res) => {
        dispatch(getMovieShowing(res.data));
        setTimeout(() => {
          dispatch(stopLoading());
        }, 1500);
      })

      .catch((err) => console.log(err));
    axios
      .get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${coming}`
      )
      .then((res) => {
        dispatch(getMovieComing(res.data));
        setTimeout(() => {
          dispatch(stopLoading());
        }, 1500);
      })

      .catch((err) => console.log(err));
  };
};
const getMovieShowing = (showingList) => {
  return {
    type: GET_SHOWING_LIST,
    payload: showingList,
  };
};
const getMovieComing = (comingList) => {
  return {
    type: GET_COMING_LIST,
    payload: comingList,
  };
};
