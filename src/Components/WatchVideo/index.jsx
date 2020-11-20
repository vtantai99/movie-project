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
      <div className="watchVideo__item">
        <span>
          <i class="fa fa-times"></i>
        </span>
        <iframe
          src={`${movieTrailer}?rel=0;&autoplay=1`}
          allowFullScreen
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allow="autoplay"
          style={{ transform: "translateY(0%)" }}
        ></iframe>
      </div>
    </div>
  ) : (
    ""
  );
};

export default WatchVideo;
