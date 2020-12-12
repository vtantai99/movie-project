import { List, ListItem, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";

import {
  fetchTheaterList,
  switchRap,
} from "../../redux/action/heThongRapAction/actions";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    wrap: {
      borderRight: "1px solid #ccc",
    },
    img: {
      width: "50px",
      opacity: "0.5",
      cursor: "pointer",
      "&:hover": {
        opacity: "1",
      },
    },
  };
});

const MovieTheater = () => {
  const movieDetailReducer = useSelector((state) => state.movieDetailReducer);
  const heThongRapReducer = useSelector((state) => state.heThongRapReducer);
  const { rap } = heThongRapReducer;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTheaterList());
  }, []);

  const { theaterList } = heThongRapReducer;

  console.log(theaterList);

  const classes = useStyles();

  return (
    <div className="movieTheater">
      <ul className={classes.wrap}>
        {theaterList?.map((el) => (
          <li
            className={el.maHeThongRap === rap ? "rap_active" : ""}
            onClick={() => dispatch(switchRap(el.maHeThongRap))}
          >
            <img className={classes.img} src={el.logo} alt="" />
            <span>{el.maHeThongRap}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieTheater;
