import { GET_MOVIE_LIST, GET_MOVIE_LIST_SUCCESS } from "./actionTypes";
import { startLoading, stopLoading } from "../commonAction/actions";
import axios from "axios";
import { ImportExportRounded } from "@material-ui/icons";

export const getMovieListRequest = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08"
      )
      .then((res) => {
        dispatch(getMovieListSuccess(res.data));
        setTimeout(() => {
          dispatch(stopLoading());
        }, 1500);
      })

      .catch((err) => console.log(err));
  };
};
const getMovieListSuccess = (movieList) => {
  return {
    type: GET_MOVIE_LIST_SUCCESS,
    payload: movieList,
  };
};
