import * as actions from "./actionTypes";
import swal from "sweetalert";
import axios from "axios";
import Axios from "axios";
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
      swal({
        title: "Yeah!",
        icon: "success",
        text: "Login Successful",
        timer: 1000,
        buttons: false,
      });
      await setTimeout(() => history.push("/"), 1000);
    }
  } catch (err) {
    dispatch(showError(err.response.data));
  }
};
export const getInfoUser = (account) => {
  return (dispatch) => {
    Axios.post(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      account
    )
      .then((res) => dispatch(infoUser(res.data)))
      .catch((err) => console.log(err));
  };
};
export const logIn = (user) => {
  return {
    type: actions.LOG_IN,
    payload: user,
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
