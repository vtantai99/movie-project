import * as actions from "./actionTypes";
import axios from "axios";
import swal from "sweetalert";
import { getMovieListRequest } from "../movieListAction/action";
import { GET_SHOWING_LIST } from "../movieListAction/actionTypes";

export const addMovie = (movie, history) => async (dispatch) => {
  axios({
    method: "POST",
    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
    data: movie,
  })
    .then(() =>
      swal({
        title: "Them phim thanh cong",
        icon: "success",
        buttons: {
          confirm: "OK",
        },
      }).then(() => {
        dispatch(getMovieListRequest("GP09", GET_SHOWING_LIST));
        history.push("/admin/movieList");
      })
    )
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const selectMovie = (movie) => (dispatch) => {
  dispatch({
    type: actions.SELECT_MOVIE,
    payload: movie,
  });
};

export const fetchMovieList = () => (dispatch) => {
  axios({
    method: "GET",
    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
  })
    .then((res) => {
      dispatch({
        type: actions.FETCH_MOVIE_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editMovie = (movie, user, history) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
      data: movie,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    if (res.status === 200 || res.status === 201) {
      swal({
        title: "Update phim thanh cong",
        icon: "success",
        buttons: {
          confirm: "OK",
        },
      }).then(() => {
        dispatch(fetchMovieList());
        dispatch(selectMovie(null));
        history.push("/admin/movieList");
      });
    }
  } catch (err) {
    console.log(err);
    swal({
      title: "Update phim that bai",
      icon: "error",
      buttons: {
        confirm: "OK",
      },
    });
  }
};

export const deleteMovie = (maPhim, user) => async (dispatch) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      data: maPhim,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    if (res.status === 200 || res.status === 201) {
      swal({
        title: "Xoa phim phim thanh cong",
        icon: "success",
        buttons: {
          confirm: "OK",
        },
      }).then(() => {
        dispatch(fetchMovieList());
        dispatch(selectMovie(null));
      });
    }
  } catch (err) {
    swal({
      title: err.response.data,
      icon: "error",
      buttons: {
        confirm: "OK",
      },
    });
  }
};

export const updateSearchTerm = (term) => {
  return {
    type: actions.UPDATE_SEARCH_TERM,
    payload: term,
  };
};
