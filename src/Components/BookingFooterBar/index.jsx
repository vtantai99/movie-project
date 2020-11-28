import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { nextStep } from "../../redux/action/bookingAction/actions";

const BookingFooterBar = () => {
  const bookingReducer = useSelector((state) => state.bookingReducer);
  const { step } = bookingReducer;
  const dispatch = useDispatch();
  return (
    <div className="bookingFooterBar">
      <div className="bookingFooterBar_gheDaChon">
        <h3>Ghe da chon</h3>
      </div>
      {step === 1 ? (
        <div onClick={() => dispatch(nextStep())} className="btn-container">
          <h3>Tiep tuc</h3>
        </div>
      ) : (
        <div className="btn-container">
          <h3>Thanh toan</h3>
        </div>
      )}
    </div>
  );
};

export default BookingFooterBar;
