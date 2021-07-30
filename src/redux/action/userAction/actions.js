import * as actions from "./actionTypes";
import swal from "sweetalert";
import axios from "axios";
import Axios from "axios";
import { startLoading, stopLoading } from "../commonAction/actions";
export const signUpRequest = (user, history) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: user,
    });
    if (res.status === 200 || res.status === 201) {
      swal({
        title: "Đăng kí thành công",
        text: "Bạn có thể đăng nhập ngay bây giờ",
        icon: "success",
        button: {
          text: "Đồng ý",
        },
      }).then(() => {
        history.push("/login");
      });
    }
  } catch (err) {
    dispatch(showError(err.response.data));
  }
};

export const loginRequest = (user, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      user
    );
    if (res.status === 200 || res.status === 201) {
      await localStorage.setItem("user", JSON.stringify(res.data));
      await dispatch(logIn(res.data));
      await history.push("/");
    }
  } catch (err) {
    dispatch(showError(err.response.data));
  }
};

export const getInfoUserRequest = (account) => {
  return (dispatch) => {
    dispatch(startLoading());
    Axios.post(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      account
    )
      .then((res) => {
        dispatch(infoUser(res.data));
        dispatch(stopLoading());
      })
      .catch((err) => console.log(err));
  };
};

export const getInfoUserByPage = (page, quantity) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP09&soTrang=${page}&soPhanTuTrenTrang=${quantity}`
    );
    if (res.status === 200 || res.status === 201) {
      await dispatch(allInfoUser(res.data));
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser =
  (admin, taiKhoan, page, quantity) => async (dispatch) => {
    try {
      const res = await axios({
        method: "DELETE",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        headers: {
          Authorization: `Bearer ${admin.accessToken}`,
        },
      });
      if (res.status === 200 || res.status === 201) {
        swal({
          title: res.data,
          icon: "success",
          timer: 1000,
        });
        await dispatch(getInfoUserByPage(page, quantity));
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

export const logIn = (user) => {
  return {
    type: actions.LOG_IN,
    payload: user,
  };
};

export const allInfoUser = (listInfo) => {
  return {
    type: actions.ALL_INFO_USER,
    payload: listInfo,
  };
};

export const infoUser = (info) => {
  return {
    type: actions.INFO_USER,
    payload: info,
  };
};
export const showError = (err) => {
  return {
    type: actions.SHOW_ERROR,
    payload: err,
  };
};
export const hideError = () => {
  return {
    type: actions.HIDE_ERROR,
    payload: "",
  };
};
