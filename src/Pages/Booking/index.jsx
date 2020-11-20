import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import BookingHead from "../../Components/BookingHead";
import BookingMain from "../../Components/BookingMain";
import BookingSideBar from "../../Components/BookingSideBar";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { useHistory, useParams } from "react-router-dom";
import { getBooking } from "../../redux/action/bookingAction/actions";
import swal from "sweetalert";
import { resetTime } from "../../redux/action/bookingAction/actions";
const Booking = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const bookingReducer = useSelector((state) => state.bookingReducer);
  const { countDownTime, bookingList } = bookingReducer;

  useEffect(() => {
    const { bookingId } = params;
    dispatch(resetTime());
    dispatch(getBooking(bookingId));
  }, []);

  const timeIsOver = () => {
    {
      swal({
        title: "Your time is over",
        icon: "error",
        buttons: {
          cancel: "Cancel",
          reset: {
            text: "Start again",
            value: "reset",
          },
        },
      }).then((value) => {
        console.log(value);
        switch (value) {
          case "reset":
            history.go(0);
            break;

          default:
            history.push("/");
        }
      });
    }
  };

  return (
    <div className="booking">
      {countDownTime <= 0 ? timeIsOver() : ""}
      {bookingList ? (
        <Grid container>
          <Grid item sm="9">
            <BookingHead />
            <BookingMain />
          </Grid>
          <Grid item sm="3">
            <BookingSideBar />
          </Grid>
        </Grid>
      ) : (
        "Ngu"
      )}
    </div>
  );
};

export default Booking;
