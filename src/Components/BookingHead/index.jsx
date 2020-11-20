import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./index.scss";
import { NavLink } from "react-router-dom";

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

  return (
    <AppBar className={`${classes.head} head`} position="fixed">
      <NavLink to="/">
        <img
          className={classes.img}
          src="https://kdq-react-movie-app.surge.sh/images/logo.png"
          alt=""
        />
      </NavLink>
      <p>Logo</p>
    </AppBar>
  );
}
