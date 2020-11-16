import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import BookingSeats from "../BookingSeats";
const BookingMain = () => {
  const dispatch = useDispatch();
  const bookingReducer = useSelector((state) => state.bookingReducer);
  return (
    <div className="bookingMain">
      <div className="meta-data"></div>
      <div className="screen"></div>
      <BookingSeats />
    </div>
  );
};

export default BookingMain;
