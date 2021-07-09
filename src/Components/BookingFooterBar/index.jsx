import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextStep } from "../../redux/action/bookingAction/actions";
import DangChonSeats from "../DangChonSeats";

const BookingFooterBar = () => {
  const bookingReducer = useSelector((state) => state.bookingReducer);
  const { step, bookingList } = bookingReducer;
  const dispatch = useDispatch();
  const renderBookingFooter = () => {
    const { danhSachGhe } = bookingList;
    const dsDangChon = danhSachGhe?.filter((el) => el.dangChon);
    return (
      <div className="bookingFooterBar">
        <div className="bookingFooterBar_gheDaChon">{<DangChonSeats />}</div>
        {step === 1 ? (
          <button
            disabled={dsDangChon.length > 0 ? false : true}
            onClick={() => dispatch(nextStep())}
            className={`btn-container continue ${
              dsDangChon.length > 0 ? "next" : ""
            }`}
          >
            <span>TIẾP TỤC</span>
          </button>
        ) : (
          <button className="btn-container">
            <span>THANH TOÁN</span>
          </button>
        )}
      </div>
    );
  };
  return bookingList.danhSachGhe ? renderBookingFooter() : "";
};

export default BookingFooterBar;
