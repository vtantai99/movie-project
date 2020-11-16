import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { dropMovieTrailer } from "../../redux/action/movieDetailAction/actions";
const WatchVideo = () => {
  const dispatch = useDispatch();
  const movieDetailReducer = useSelector((state) => state.movieDetailReducer);
  const { movieTrailer } = movieDetailReducer;
  return movieTrailer ? (
    <div onClick={() => dispatch(dropMovieTrailer())} className="watchVideo">
      <iframe width="650px" height="450px" src={movieTrailer}></iframe>
    </div>
  ) : (
    ""
  );
};

export default WatchVideo;
