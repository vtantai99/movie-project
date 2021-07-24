import axios from "axios";
import { startLoading, stopLoading } from "../commonAction/actions";
import * as actions from "./actionTypes";
export const fetchListUser = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const res = await axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09"
    );
    if (res.status === 200 || res.data === 201) {
      await dispatch(getListUser(res.data));
      for (let user of res.data) {
        await axios
          .post(
            "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
            { taiKhoan: user?.taiKhoan }
          )
          .then((res) => {
            dispatch({
              type: "THEM_INFO",
              payload: res.data,
            });
          })
          .catch((err) => console.log(err));
      }
      await dispatch(stopLoading());
    }
  } catch (err) {
    console.log(err);
  }
};

const getListUser = (data) => {
  return {
    type: actions.GET_LIST_USER,
    payload: data,
  };
};
