import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { dropMovieTrailer } from "../../redux/action/movieAction/actions";
const WatchVideo = () => {
  const dispatch = useDispatch();
  const movieReducer = useSelector((state) => state.movieReducer);
  const { movieTrailer } = movieReducer;
  return movieTrailer ? (
    <div onClick={() => dispatch(dropMovieTrailer())} className="watchVideo">
      <iframe width="650px" height="450px" src={movieTrailer}></iframe>
    </div>
  ) : (
    ""
  );
};

export default WatchVideo;
