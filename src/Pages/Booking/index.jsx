import React, { useEffect, Fragment } from "react";
import "../../Assets/Styles/SCSS/Pages/booking.scss";
import BookingHeader from "../../Components/BookingHeader";
import BookingMain from "../../Components/BookingMain";
import BookingSideBar from "../../Components/BookingSideBar";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { callFood, getBooking } from "../../redux/action/bookingAction/actions";
const Booking = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { user } = useSelector((state) => state.userReducer);
  const { statusFood } = useSelector((state) => state.bookingReducer);
  const { bookingId } = params;
  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
    dispatch(getBooking(bookingId, history));
  }, []);
  return (
    <Fragment>
      <section className="booking">
        <div className="booking__main">
          <div
            className="booking__main__overlay"
            style={
              statusFood
                ? { opacity: "1" }
                : { opacity: "0", visibility: "hidden" }
            }
            onClick={() => dispatch(callFood(!statusFood))}
          ></div>
          <BookingHeader />
          <BookingMain />
        </div>
        <div className="booking__sidebar">
          <BookingSideBar />
        </div>
      </section>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Booking;
