import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";

import "./index.scss";
import DangChonSeats from "../DangChonSeats";
import { bookingRequest } from "../../redux/action/bookingAction/actions";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  sideBar: {
    boxShadow: theme.shadows[20],
  },
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 600,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  li: {
    margin: "20px auto",
    borderBottom: "1px dotted #ccc",
    display: "flex",
  },
}));

export default function BookingSideBar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const bookingReducer = useSelector((state) => state.bookingReducer);
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { user } = userLoginReducer;
  const { bookingList, step } = bookingReducer;
  const { thongTinPhim } = bookingList;
  const params = useParams();
  const { bookingId } = params;
  const history = useHistory();
  const {
    diaChi,
    gioChieu,
    hinhAnh,
    maLichChieu,
    ngayChieu,
    tenCumRap,
    tenPhim,
    tenRap,
  } = thongTinPhim ? thongTinPhim : "";

  const formatNumber = (number) => {
    if (number || number == 0) {
      number = number.toString().split("");
      for (let i = number.length - 3; i >= 1; i -= 3) {
        number.splice(i, 0, ",");
      }
      return number.reduce((acc, el) => (acc += el));
    }
  };

  const getDanhSachGheDangChon = () => {
    const { danhSachGhe } = bookingList;
    return danhSachGhe?.filter((ghe) => ghe.dangChon);
  };

  const calcPrice = () => {
    const danhSachGheDangChon = getDanhSachGheDangChon();
    if (danhSachGheDangChon) {
      if (danhSachGheDangChon.length > 0) {
        return danhSachGheDangChon
          .map((el) => el.giaVe)
          .reduce((a, b) => (a += b));
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  const renderSeats = () => {
    const danhSachGheDangChon = getDanhSachGheDangChon();
    if (danhSachGheDangChon) {
      return danhSachGheDangChon.length > 0 ? (
        renderDangChonSeats(danhSachGheDangChon)
      ) : (
        <strong className="warning">Vui long chon ghe</strong>
      );
    }
  };

  const renderDangChonSeats = (danhSachGheDangChon) => {
    return danhSachGheDangChon.map((el, idx) => (
      <span key={idx}>{getTenDay(+el.stt)}</span>
    ));
  };

  const getTenDay = (stt) => {
    if (stt >= 145) {
      return `J${stt - 16 * 9}`;
    } else if (stt >= 129) {
      return `I${stt - 16 * 8}`;
    } else if (stt >= 113) {
      return `H${stt - 16 * 7}`;
    } else if (stt >= 97) {
      return `G${stt - 16 * 6}`;
    } else if (stt >= 81) {
      return `F${stt - 16 * 5}`;
    } else if (stt >= 65) {
      return `E${stt - 16 * 4}`;
    } else if (stt >= 49) {
      return `D${stt - 16 * 3}`;
    } else if (stt >= 33) {
      return `C${stt - 16 * 2}`;
    } else if (stt >= 17) {
      return `B${stt - 16}`;
    } else {
      return `A${stt}`;
    }
  };

  const handleThanhToan = () => {
    console.log(bookingId);
    swal({
      title: "Thông tin đặt vé sẽ được gửi qua email?",
      text: "Hãy kiểm tra thông tin trước khi xác nhận!",
      icon: "info",
      buttons: true,
    }).then((buy) => {
      if (buy) {
        const danhSachGheDangChon = getDanhSachGheDangChon().map((ghe) => ({
          maGhe: ghe.maGhe,
          giaVe: ghe.giaVe,
        }));
        dispatch(bookingRequest(bookingId, user, danhSachGheDangChon, history));
      }
    });
  };

  return bookingList ? (
    <div
      className={`${classes.sideBar} bookingSideBar ${
        step >= 2 ? "bookingSideBarActive" : ""
      }`}
    >
      <ul>
        <li className="price">{formatNumber(calcPrice())} D</li>
        <li>
          <strong>{tenPhim}</strong>
        </li>
        <li>
          <span>Ngày giờ chiếu</span>
          <strong>
            {ngayChieu}-{gioChieu}
          </strong>
        </li>
        <li>
          <span>Cụm rạp</span>
          <strong>{tenCumRap}</strong>
        </li>
        <li>
          <span>Rạp</span>
          <strong>{tenRap}</strong>
        </li>
        <li className="dangChonSeats">
          <DangChonSeats />
        </li>
        <li className="chonCombo">
          <span>Chọn combo</span>
          <strong></strong>
        </li>
      </ul>
      <button
        onClick={handleThanhToan}
        disabled={
          getDanhSachGheDangChon() && getDanhSachGheDangChon().length > 0
            ? false
            : true
        }
        className={
          getDanhSachGheDangChon() && getDanhSachGheDangChon().length > 0
            ? "active"
            : ""
        }
      >
        Thanh toan
      </button>
    </div>
  ) : (
    ""
  );
}
