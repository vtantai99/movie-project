import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import BackArrow from "../../Assets/Images/back-session.png";

import "./index.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { prevStep } from "../../redux/action/bookingAction/actions";

const useStyles = makeStyles((theme) => {
  console.log(theme.breakpoints);
  return {
    root: {
      flexGrow: 1,
    },
    head: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      backgroundColor: "#fff",
      color: "#333",
      padding: "5px !important",
      [theme.breakpoints.up("md")]: {
        paddingRight: "30% !important",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    img: {
      width: "50px",
    },
  };
});

export default function BookingHead() {
  const classes = useStyles();
  const bookingReducer = useSelector((state) => state.bookingReducer);
  const { step } = bookingReducer;
  const dispatch = useDispatch();

  return (
    <AppBar className={`${classes.head} head`}>
      {step >= 2 ? (
        <img
          onClick={() => dispatch(prevStep())}
          className={`${classes.img} backArrow`}
          src={BackArrow}
        />
      ) : (
        ""
      )}
      {step < 2 ? (
        <NavLink to="/">
          <img
            className={classes.img}
            src="https://kdq-react-movie-app.surge.sh/images/logo.png"
            alt=""
          />
        </NavLink>
      ) : (
        ""
      )}
      <div className="step-big">
        <div>01 Chon ghe va thanh toan</div>
        <div>02 Ket qua dat ve</div>
      </div>
      <div className="step">
        {step === 1 ? (
          <div className="step-item">Chon ghe </div>
        ) : (
          <div className="step-item">Dat ve</div>
        )}
      </div>

      <p>Logo</p>
    </AppBar>
  );
}
