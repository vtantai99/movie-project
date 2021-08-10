import * as actions from "./actionTypes";
import Axios from "axios";

export const switchRap = (rap) => {
  return {
    type: actions.SWITCH_RAP,
    payload: rap,
  };
};
// Call API danh sach he thong rap
export const fetchTheaterList = () => {
  return (dispatch) => {
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
    )
      .then((res) => dispatch(fetchTheaterListSuccess(res.data)))
      .catch((err) => console.log(err));
  };
};

// Call API tat ca từng rạp chi tiết của mã nhóm GP09
export const fetchTheaterListDetail = () => {
  return (dispatch) => {
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09"
    )
      .then((res) => dispatch(fetchTheaterListDetailSuccess(res.data)))
      .catch((err) => console.log(err));
  };
};

const fetchTheaterListSuccess = (theaterList) => {
  return { type: actions.FETCH_THEATER_LOGO, payload: theaterList };
};

const fetchTheaterListDetailSuccess = (listTheaterDetail) => {
  return {
    type: actions.FETCH_THEATER_LIST_DETAIL,
    payload: listTheaterDetail,
  };
};

export const getCodeTheater = (codeTheater) => {
  return { type: actions.GET_CODE_THEATER, payload: codeTheater };
};

export const refreshCodeTheater = () => {
  return {
    type: actions.REFRESH_CODE_THEATER,
    payload: "bhd-star-cineplex-pham-hung",
  };
};
