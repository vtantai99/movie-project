import axios from "axios";
import * as actions from "./actionTypes";
import swal from "sweetalert";
import { startLoading, stopLoading } from "../commonAction/actions";
export const getBooking = (id, history) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const res = await axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
      method: "GET",
    });
    if (res.status === 200 || res.status === 201) {
      await dispatch({
        type: actions.GET_BOOKING,
        payload: res.data,
      });
      await dispatch(stopLoading());
    }
  } catch (err) {
    swal({
      title: "Không tìm thấy phim",
      icon: "warning",
      buttons: {
        confirm: "Trang chủ",
      },
    }).then((yes) => {
      history.push("/");
    });
  }
};
export const selectSeat = (seat) => {
  return {
    type: actions.SELECT_SEAT,
    payload: seat,
  };
};
export const bookingRequest =
  (maLichChieu, user, danhSachVe, history) => async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data: {
          maLichChieu,
          danhSachVe,
          taiKhoanNguoiDung: user.taiKhoan,
        },
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      if (res.status === 200 || res.status === 201) {
        console.log(res.data);
        swal({
          title: "Đặt vé thành công",
          icon: "success",
          buttons: {
            cancel: "Đặt thêm vé",
            confirm: "Trang chủ",
          },
        }).then((yes) => {
          if (yes) {
            history.push("/");
          } else {
            window.location.reload();
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
export const callFood = (value) => {
  return {
    type: actions.CALL_FOOD,
    payload: value,
  };
};

export const rpsBooking = (value) => {
  return {
    type: actions.RPS_BOOKING,
    payload: value,
  };
};
