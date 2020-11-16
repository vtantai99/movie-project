import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieShowTimeDates from "../MovieShowTimeDates";
import MovieShowTimes from "../MovieShowTimes";
import MovieTheater from "../MovieTheater";
import "./index.scss";

const MovieDetailShowTime = () => {
  const movieDetailReducer = useSelector((state) => state.movieDetailReducer);
  const { movieDetail } = movieDetailReducer;
  const { lichChieu } = movieDetail;
  console.log(lichChieu);
  return (
    <div className="movieDetailShowTime">
      <Grid container>
        <Grid item sm="3" xs="12">
          <MovieTheater />
        </Grid>
        <Grid item sm="9" xs="12">
          <MovieShowTimeDates />
          <MovieShowTimes lichChieu={lichChieu} />
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetailShowTime;
