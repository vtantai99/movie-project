import * as actions from "./actionTypes";

import axios from "axios";
export const loginRequest = (user, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      user
    );
    if (res.status == 200 || res.status == 201) {
      const logInUser = res.data;
      await localStorage.setItem("user", JSON.stringify(logInUser));
      await dispatch({
        type: actions.LOGIN,
        payload: {
          isLogined: true,
          user: logInUser,
        },
      });
      await history.goBack();
    }
  } catch (err) {
    console.log(err);
    dispatch(showError());
  }
};

export const showError = () => {
  return {
    type: actions.SHOW_ERROR,
    payload: "Mật khẩu hoặc tài khoản không đúng",
  };
};

export const hideError = () => {
  return {
    type: actions.HIDE_ERROR,
    payload: "",
  };
};