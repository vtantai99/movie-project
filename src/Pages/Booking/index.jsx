import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import BookingHead from "../../Components/BookingHead";
import BookingMain from "../../Components/BookingMain";
import BookingSideBar from "../../Components/BookingSideBar";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { useHistory, useParams } from "react-router-dom";
import { getBooking } from "../../redux/action/bookingAction/actions";
const Booking = () => {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    const { bookingId } = params;
    dispatch(getBooking(bookingId));
  }, []);

  return (
    <div className="booking">
      <Grid container>
        <Grid item sm="9">
          <BookingHead />
          <BookingMain />
        </Grid>
        <Grid item sm="3">
          <BookingSideBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Booking;
