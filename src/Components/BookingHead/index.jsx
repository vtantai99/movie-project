import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import BackArrow from "../../Assets/Images/back-session.png";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

import "./index.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { prevStep } from "../../redux/action/bookingAction/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  head: {
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: theme.shadows[10],
    width: "100%",
    backgroundColor: "#fff",
    paddingRight: "30%",
    color: "#333",
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
}));

export default function BookingHead() {
  const classes = useStyles();
  const bookingReducer = useSelector((state) => state.bookingReducer);
  const { step } = bookingReducer;
  const dispatch = useDispatch();

  return (
    <AppBar className={`${classes.head} head`} position="fixed">
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
