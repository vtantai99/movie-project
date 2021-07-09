import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookingSeatChoosing from "../BookingSeatChoosing";
import BookingFood from "../BookingFood";
import BookingHeader from "../BookingHeader";
import {
  bookingRequest,
  callFood,
} from "../../redux/action/bookingAction/actions";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import totalAtm from "../../Assets/Images/totalAtm.png";
import totalCash from "../../Assets/Images/totalCash.png";
import totalVisa from "../../Assets/Images/totalVisa.png";
import { Button } from "@material-ui/core";
export default function BookingSideBar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { bookingList, statusFood, statusRps, foodList } = useSelector(
    (state) => state.bookingReducer
  );
  const { darkMode } = useSelector((state) => state.commonReducer);
  const { thongTinPhim } = bookingList;
  const history = useHistory();
  const { gioChieu, maLichChieu, ngayChieu, tenCumRap, tenPhim, tenRap } =
    thongTinPhim ? thongTinPhim : "";
  const [valuePayment, setValuePayment] = useState("");
  const typePayment = () => {
    let listType = [
      {
        name: "payment",
        id: "atm",
        img: `${totalAtm}`,
        des: "Thẻ ATM nội địa",
      },
      {
        name: "payment",
        id: "visa",
        img: `${totalVisa}`,
        des: "Visa, MasterCard, JCB",
      },
      {
        name: "payment",
        id: "cash",
        img: `${totalCash}`,
        des: "Thanh toán tiền mặt tại quầy",
      },
    ];
    return listType.map((item, index) => (
      <div className="select__item" key={index}>
        <input
          onChange={(e) => handleChecked(e.target.value)}
          className="item--input"
          type="radio"
          id={item.id}
          name={item.name}
          value={item.id}
          disabled={seatsChoosing?.length ? false : true}
        />
        <label className="item--label" for={item.id}>
          <img src={item.img} alt={item.id} />
          {item.des}
        </label>
      </div>
    ));
  };
  const handleChecked = (value) => {
    setValuePayment(value);
  };
  const formatNumber = (number) => {
    if (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else return 0;
  };
  const seatsChoosing = bookingList.danhSachGhe?.filter(
    (item) => item.dangChon
  );
  const priceSeat = seatsChoosing?.reduce(
    (temp, item) => (temp += item.giaVe),
    0
  );
  const priceFood = foodList.reduce(
    (temp, item) => (temp += item.price * item.quantity),
    0
  );
  const priceTotal = priceSeat + priceFood;
  const handleThanhToan = () => {
    if (!valuePayment) {
      swal({
        title: "Vui lòng chọn hình thức thanh toán",
        icon: "error",
        buttons: {
          text: "Thoát",
        },
      });
    } else {
      swal({
        title: "Bạn đã chắc chắn",
        text: "Sau khi xác nhận thì chúng tôi không thể hoàn vé, kiểm tra lại thật kỹ nhé!",
        icon: "warning",
        buttons: {
          cancel: "Kiểm tra lại",
          confirm: "Xác nhận",
        },
      }).then((confirm) => {
        if (confirm) {
          const danhSachVe = seatsChoosing.map((item) => ({
            maGhe: item.maGhe,
            giaVe: item.giaVe,
          }));
          dispatch(bookingRequest(maLichChieu, user, danhSachVe, history));
        }
      });
    }
  };
  return bookingList ? (
    <div
      className={darkMode ? "bookingSidebar Dark" : "bookingSidebar"}
      style={statusRps ? { display: "block" } : {}}
    >
      <div className="bookingSidebar__header">
        <BookingHeader />
      </div>
      <ul>
        <li className="price">{formatNumber(priceTotal)} đ</li>
        <li>
          <span>Tên phim:</span>
          <strong>{tenPhim}</strong>
        </li>
        <li>
          <span>Ngày giờ chiếu:</span>
          <strong>
            {ngayChieu}-{gioChieu}
          </strong>
        </li>
        <li>
          <span>Cụm rạp:</span>
          <strong>{tenCumRap}</strong>
        </li>
        <li>
          <span>Rạp:</span>
          <strong>{tenRap}</strong>
        </li>
        <li className="seat">
          <div className="seat__main">
            {seatsChoosing?.length > 0 ? (
              <span>Ghế&nbsp;</span>
            ) : (
              <span>Vui lòng chọn ghế</span>
            )}
            <BookingSeatChoosing />
          </div>
          <strong>{formatNumber(priceSeat)}&nbsp;đ</strong>
        </li>
        <li className="combo__btn">
          <Button
            variant="contained"
            onClick={() => dispatch(callFood(!statusFood))}
          >
            <i className="fas fa-cart-arrow-down mr-1"></i>
            Food &amp; drink
          </Button>
          <strong>{formatNumber(priceFood)} đ</strong>
        </li>
        <li className="payment">
          <span>Chọn hình thức thanh toán:</span>
          <div className="select">{typePayment()}</div>
        </li>
      </ul>
      <div
        className="food__desktop"
        style={
          statusFood
            ? { left: "-150%" }
            : {
                left: "0",
                visibility: "hidden",
                opacity: "0",
              }
        }
      >
        <BookingFood />
      </div>
      <div
        className="food__tablet"
        style={
          statusFood
            ? { opacity: "1", visibility: "visible" }
            : {
                visibility: "hidden",
                opacity: "0",
              }
        }
      >
        <BookingFood />
      </div>
      <div className="footer__booking">
        <footer className="total__tablet">
          <div className="total__tablet__btn">
            <div
              style={{
                width: "50%",
                textAlign: "center",
                fontSize: "16px",
                backgroundColor: "white",
                color: "#108f3e",
              }}
            >
              {formatNumber(priceTotal)}
            </div>
            <Button
              onClick={handleThanhToan}
              style={{ backgroundColor: "#28a745" }}
            >
              THANH TOÁN
            </Button>
          </div>
        </footer>
        <Button
          onClick={handleThanhToan}
          disabled={seatsChoosing?.length ? false : true}
          style={
            seatsChoosing?.length
              ? { backgroundColor: "#28a745", cursor: "pointer" }
              : {
                  backgroundColor: "#74e48e",
                  cursor: "not-allowed",
                }
          }
          className="total__desktop"
        >
          THANH TOÁN
        </Button>
      </div>
    </div>
  ) : (
    ""
  );
}
