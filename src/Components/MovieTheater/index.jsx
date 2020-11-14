import { List, ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BHD from "../../Assets/Images/bhd-star-cineplex.png";
import CGV from "../../Assets/Images/cgv.png";
import CINESTAR from "../../Assets/Images/cinestar.png";
import GALAXY from "../../Assets/Images/galaxy-cinema.png";
import MEGAGS from "../../Assets/Images/megags.png";
import LotteCINEMA from "../../Assets/Images/lotte-cinema.png";
import { switchRap } from "../../redux/action/heThongRapAction/actions";

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
  const { movieDetail } = movieDetailReducer;
  const { lichChieu } = movieDetail;
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <div>
      <List className={classes.wrap}>
        <ListItem onClick={() => dispatch(switchRap("BHDStar"))}>
          <img className={classes.img} src={BHD} alt="" />
        </ListItem>
        <ListItem onClick={() => dispatch(switchRap("CGV"))}>
          <img className={classes.img} src={CGV} alt="" />
        </ListItem>
        <ListItem onClick={() => dispatch(switchRap("CineStar"))}>
          <img className={classes.img} src={CINESTAR} alt="" />
        </ListItem>
        <ListItem onClick={() => dispatch(switchRap("Galaxy"))}>
          <img className={classes.img} src={GALAXY} alt="" />
        </ListItem>
        <ListItem onClick={() => dispatch(switchRap("MegaGS"))}>
          <img className={classes.img} src={MEGAGS} alt="" />
        </ListItem>
        <ListItem onClick={() => dispatch(switchRap("LotteCinima"))}>
          <img className={classes.img} src={LotteCINEMA} alt="" />
        </ListItem>
      </List>
    </div>
  );
};

export default MovieTheater;
