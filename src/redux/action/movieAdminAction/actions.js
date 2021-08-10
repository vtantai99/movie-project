import * as actions from "./actionTypes";
import axios from "axios";
import swal from "sweetalert";
import { getMovieListRequest } from "../movieListAction/action";
import { GET_SHOWING_LIST } from "../movieListAction/actionTypes";

export const addMovie = (movie) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      data: movie,
    });
    if (res.status === 200 || res.status === 201) {
      console.log(res.data);
      swal({
        title: "Thêm phim thành công",
        icon: "success",
        buttons: {
          confirm: "OK",
        },
      }).then(async (res) => {
        await dispatch(modalMovieRequest({ statusModal: false }));
        await dispatch(getMovieListRequest("GP09", GET_SHOWING_LIST));
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

export const updateFilm = (movie, user) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
      data: movie,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    if (res.status === 200 || res.status === 201) {
      console.log(res.data);
      swal({
        title: "Cập nhật phim thành công",
        icon: "success",
        buttons: {
          confirm: "OK",
        },
      }).then(async (res) => {
        await dispatch(modalMovieRequest({ statusModal: false }));
        await dispatch(getMovieListRequest("GP09", GET_SHOWING_LIST));
      });
    }
  } catch (err) {
    console.log(err);
    swal({
      title: err.response.data,
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
    if (res.status === 200) {
      console.log(res.data);
      swal({
        title: res.data,
        icon: "success",
        buttons: {
          confirm: "OK",
        },
      }).then(async () => {
        await dispatch(getMovieListRequest("GP09", GET_SHOWING_LIST));
      });
    }
  } catch (err) {
    swal({
      title: "Không thể xoá phim vì đã có lịch chiếu",
      icon: "error",
      buttons: {
        confirm: "OK",
      },
    });
  }
};

export const modalMovieRequest = (data) => {
  return {
    type: actions.MODAL_MOVIE,
    payload: data,
  };
};

export const updateSearchTerm = (term) => {
  return {
    type: actions.UPDATE_SEARCH_TERM,
    payload: term,
  };
};
