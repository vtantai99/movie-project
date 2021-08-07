import * as actions from "./actionTypes";
import swal from "sweetalert";
import axios from "axios";
import Axios from "axios";
import { startLoading, stopLoading } from "../commonAction/actions";

export const signUpRequest = (user, type, history) => async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: user,
    });
    if (res.status === 200 || res.status === 201) {
      if (type === "addUser") {
        swal({
          title: "Thêm người dùng thành công",
          icon: "success",
          button: {
            text: "Đồng ý",
          },
        }).then(() => {
          dispatch(getAllUserRequest());
          dispatch(changeModalUser({ statusModal: false }));
        });
      } else {
        swal({
          title: "Đăng kí thành công",
          text: "Bạn có thể đăng nhập ngay bây giờ",
          icon: "success",
          button: {
            text: "Đồng ý",
          },
        }).then(() => {
          history.push("/signIn");
        });
      }
    }
  } catch (err) {
    if (type === "addUser") {
      swal({
        title: err.response.data,
        icon: "error",
      });
    } else {
      dispatch(showError(err.response.data));
    }
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

export const getAllUserRequest = () => async (dispatch) => {
  try {
    const res = await Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09"
    );
    if (res.status === 200 || res.status === 201) {
      await dispatch(getAllUserSuccess(res.data));
    }
  } catch (err) {}
};

export const deleteUser = (admin, taiKhoan) => async (dispatch) => {
  console.log(admin, taiKhoan);
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
      });
      await dispatch(getAllUserRequest());
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

export const updateUserRequest = (user, infoUpdate) => async (dispatch) => {
  try {
    const res = await Axios({
      method: "PUT",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: infoUpdate,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    if (res.status === 200 || res.status === 201) {
      swal({
        title: "Yeah",
        icon: "success",
        text: "Cập nhật thành công",
      }).then(
        (confirm) =>
          confirm && dispatch(changeModalUser({ statusModal: false }))
      );
      await dispatch(getAllUserRequest());
    }
  } catch (err) {
    swal({
      title: err.response.data,
      icon: "error",
      button: true,
    });
  }
};

export const logOutUser = () => {
  return {
    type: actions.LOG_OUT,
    payload: null,
  };
};

// Khi call API xong thì gửi data vào hàm này để đẩy lên redux
const getAllUserSuccess = (data) => {
  return {
    type: actions.GET_ALL_USER,
    payload: data,
  };
};

// Lấy info user đang đăng nhập
export const infoUser = (info) => {
  return {
    type: actions.INFO_USER,
    payload: info,
  };
};
export const logIn = (user) => {
  return {
    type: actions.LOG_IN,
    payload: user,
  };
};

export const changeModalUser = (value) => {
  return {
    type: actions.MODAL_USER,
    payload: value,
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
