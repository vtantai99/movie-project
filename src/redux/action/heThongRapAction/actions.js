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
export const fetchTheaterDetail = () => {
  return (dispatch) => {
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09"
    )
      .then((res) => dispatch(fetchAllTheaterDetailSuccess(res.data)))
      .catch((err) => console.log(err));
  };
};
export const getCodeTheater = (codeTheater) => {
  return { type: actions.GET_CODE_THEATER, payload: codeTheater };
};
const fetchTheaterListSuccess = (theaterList) => {
  return { type: actions.FETCH_THEATER_LIST_API, payload: theaterList };
};
const fetchAllTheaterDetailSuccess = (listTheaterDetail) => {
  return { type: actions.FETCH_THEATER_DETAIL, payload: listTheaterDetail };
};
