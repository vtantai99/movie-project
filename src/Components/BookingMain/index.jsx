import React, { useEffect } from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import BookingSeats from "../BookingSeats";
import { countingDown } from "../../redux/action/bookingAction/actions";
import format from "date-format";
const BookingMain = () => {
  const dispatch = useDispatch();
  const bookingReducer = useSelector((state) => state.bookingReducer);
  const { bookingList, countDownTime, step } = bookingReducer;
  const { thongTinPhim } = bookingList;
  const { diaChi, hinhAnh, tenRap } = thongTinPhim ? thongTinPhim : "";

  useEffect(() => {
    countDownTime > 0 &&
      setTimeout(() => {
        dispatch(countingDown(countDownTime - 1));
      }, 1000);
    return 1;
  }, [countDownTime]);

  return bookingList ? (
    <div className={`bookingMain ${step <= 1 ? "bookingMainActive" : ""}`}>
      <div className="meta-data">
        <div className="address">
          <img src={hinhAnh} alt="" />
          <div className="address-info">
            {tenRap}
            <span>{diaChi}</span>
          </div>
        </div>
        <div className="countDown">
          <p>Thoi gian giu ghe</p>
          <span className="countDownTime">{countDownTime}</span>
        </div>
      </div>
      <div className="screen"></div>
      <BookingSeats />
    </div>
  ) : (
    ""
  );
};

export default BookingMain;
