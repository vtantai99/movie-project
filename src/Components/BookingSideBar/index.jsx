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
import { Button } from "@material-ui/core";
import { renderStyleColorBooking } from "../../Helper/Function/customTheater";
import { formatNumber } from "../../Helper/Function/formatNumber";
import { Modal } from "react-bootstrap";
import { listPayment } from "../../Helper/DataFake/listPayment";

export default function BookingSideBar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);
  const { bookingList, statusFood, statusRps, foodList } = useSelector(
    (state) => state.bookingReducer
  );
  const { thongTinPhim } = bookingList;
  const {
    gioChieu,
    maLichChieu,
    ngayChieu,
    tenCumRap,
    diaChi,
    tenPhim,
    tenRap,
    hinhAnh,
  } = thongTinPhim ? thongTinPhim : "";
  const { darkMode } = useSelector((state) => state.commonReducer);

  const [valuePayment, setValuePayment] = useState(null);
  const handleChecked = (value) => {
    setValuePayment(value);
  };
  const typePayment = () => {
    return listPayment.map((item, index) => (
      <div className="select__item" key={index}>
        <input
          onChange={() => handleChecked(item)}
          className="item--input"
          type="radio"
          id={item.id}
          name={item.name}
          disabled={seatsChoosing?.length ? false : true}
        />
        <label className="item--label" for={item.id}>
          <img src={item.img} alt={item.id} />
          {item.des}
        </label>
      </div>
    ));
  };

  const [showModal, setShowModal] = useState(false);

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
  const foodChoosing = foodList.filter((item) => item.quantity > 0);
  const priceTotal = priceSeat + priceFood;

  const handleShowModal = () => {
    if (!valuePayment) {
      swal({
        title: "Vui lòng chọn hình thức thanh toán",
        icon: "error",
        buttons: {
          text: "Thoát",
        },
      });
    } else {
      setShowModal(true);
    }
  };

  const handleToTal = () => {
    const danhSachVe = seatsChoosing.map((item) => ({
      maGhe: item.maGhe,
      giaVe: item.giaVe,
    }));
    dispatch(bookingRequest(maLichChieu, user, danhSachVe, history));
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
        <li className="price">{formatNumber(priceTotal)}</li>
        <li>
          <span>Tên phim:</span>
          <strong>{tenPhim}</strong>
        </li>
        <li>
          <span>Suất chiếu:</span>
          <strong>
            {gioChieu} - {ngayChieu}
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
          <strong>{formatNumber(priceSeat)}</strong>
        </li>
        <li className="combo__btn">
          <Button
            variant="contained"
            onClick={() => dispatch(callFood(!statusFood))}
          >
            <i className="fas fa-cart-arrow-down mr-1"></i>
            Food &amp; drink
          </Button>
          <strong>{formatNumber(priceFood)}</strong>
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
              onClick={() => handleShowModal()}
              style={{ backgroundColor: "#28a745" }}
            >
              THANH TOÁN
            </Button>
          </div>
        </footer>
        <Button
          onClick={() => handleShowModal()}
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
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="md"
          centered
        >
          <Modal.Header>
            <Modal.Title>Xác nhận đặt vé</Modal.Title>
          </Modal.Header>

          <div className="p-3 text-gray-600 font-bold">
            <div className="flex items-center border-dashed border-b-2 pb-2">
              <img
                className="w-60 h-60 object-cover rounded-md mr-2"
                src={hinhAnh}
                alt="theater"
              />
              <div className="ml-2">
                <p className="p-2 text-black border-dashed border-b-2">
                  {tenPhim}
                </p>
                <p className="p-2" style={renderStyleColorBooking(tenCumRap)}>
                  {tenCumRap}
                </p>
                <p className="p-2 text-gray-500 text-sm">{diaChi}</p>
                <tbody className="text-sm">
                  <tr>
                    <td className="p-2 text-black">Suất chiếu:</td>
                    <td className="p-2">
                      {gioChieu} - {ngayChieu}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 text-black">Rạp:</td>
                    <td className="p-2">{tenRap}</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-black">Ghế:</td>
                    <td className="p-2">
                      <BookingSeatChoosing />
                    </td>
                  </tr>
                </tbody>
              </div>
            </div>
            <div>
              <tbody>
                <tr>
                  <td className="p-2 text-black">Họ tên:</td>
                  <td className="p-2">{user?.hoTen}</td>
                </tr>
                <tr>
                  <td className="p-2 text-black">Email:</td>
                  <td className="p-2">{user?.email}</td>
                </tr>
                {priceFood ? (
                  <tr>
                    <td className="p-2 text-black">Food & Drinks:</td>
                    <td className="flex p-2 items-center">
                      {foodChoosing.map((item, index) => (
                        <span key={index} className="flex items-center mr-2">
                          <img
                            className="w-10 h-10 object-cover rounded"
                            src={item.img}
                            alt="food"
                          />
                          x{item.quantity}
                        </span>
                      ))}
                    </td>
                  </tr>
                ) : null}
                <tr>
                  <td className="p-2 text-black">Hình thức thanh toán:</td>
                  <td className="p-2 flex items-center">
                    <img
                      className="w-10 h-10 mr-2 object-cover"
                      src={valuePayment?.img}
                      alt="payment"
                    />
                    <span>{valuePayment?.des}</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-black">Tổng tiền:</td>
                  <td className="p-2 text-green-600">
                    {formatNumber(priceTotal)}
                  </td>
                </tr>
              </tbody>
              <p className="text-center font-thin italic">
                Thông tin đặt vé sẽ được gửi qua email của bạn!
              </p>
            </div>
          </div>
          <Modal.Footer>
            <Button
              onClick={() => setShowModal(false)}
              style={{
                background: "#95a5a6",
                color: "#fff",
                marginRight: "10px",
              }}
            >
              Đóng
            </Button>
            <Button
              onClick={() => handleToTal()}
              style={{
                background: "#007be8",
                color: "#fff",
                marginRight: "5px",
              }}
            >
              Xác nhận{" "}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  ) : (
    ""
  );
}
