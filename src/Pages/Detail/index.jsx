import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailInfo from "../../Components/DetailInfo";
import DetailMain from "../../Components/DetailMain";
import Header from "../../Components/Header";
import WatchVideo from "../../Components/WatchVideo";
import { fetchMovieDetailRequest } from "../../redux/action/movieAction/actions";
const Detail = () => {
  const params = useParams();
  useEffect(() => {
    const movieId = params.movieId;
    dispatch(fetchMovieDetailRequest(movieId));
  }, []);
  const dispatch = useDispatch();
  const movieReducer = useSelector((state) => state.movieReducer);
  const { movieDetail } = movieReducer;
  return (
    <React.Fragment>
      <Header />
      {movieDetail ? (
        <React.Fragment>
          <DetailInfo movieDetail={movieDetail} />
          <DetailMain />
        </React.Fragment>
      ) : (
        ""
      )}
      <WatchVideo />
    </React.Fragment>
  );
};

export default Detail;
