import { startLoading, stopLoading } from "../commonAction/actions";
import { GET_COMING_LIST, GET_SHOWING_LIST } from "./actionTypes";
import axios from "axios";

export const getMovieListRequest = (codeFilm, type) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${codeFilm}`
      )
      .then((res) => {
        dispatch(getMovieList(res.data, type));
        setTimeout(() => {
          dispatch(stopLoading());
        }, 1500);
      })

      .catch((err) => console.log(err));
  };
};
const getMovieList = (movieList, type) => {
  return {
    type: type,
    payload: movieList,
  };
};
