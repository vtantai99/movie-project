import { Grid, makeStyles } from "@material-ui/core";
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
import BookingFooterBar from "../../Components/BookingFooterBar";

const useStyles = makeStyles((theme) => ({}));

const Booking = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { user } = userLoginReducer;
  const bookingReducer = useSelector((state) => state.bookingReducer);
  const { countDownTime, bookingList } = bookingReducer;

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, []);

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

      <Grid className={classes.root} container>
        <Grid className={classes.item} style={{}} item md="9" xs="12">
          <BookingHead />
          <BookingMain />
        </Grid>
        <Grid style={{ backgroundColor: "yellow" }} item md="3" xs="12">
          <BookingSideBar />
        </Grid>
      </Grid>
      <BookingFooterBar />
    </div>
  );
};

export default Booking;
