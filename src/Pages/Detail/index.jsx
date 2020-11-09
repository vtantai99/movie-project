import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DetailInfo from "../../Components/DetailInfo";
import Header from "../../Components/Header";
import WatchVideo from "../../Components/WatchVideo";
import { fetchMovieDetailRequest } from "../../redux/action/movieAction/actions";
const Detail = () => {
  useEffect(() => {
    dispatch(fetchMovieDetailRequest(1325));
  }, []);
  const dispatch = useDispatch();
  const movieReducer = useSelector((state) => state.movieReducer);
  const { movieDetail } = movieReducer;
  return (
    <React.Fragment>
      <Header />
      {movieDetail ? <DetailInfo movieDetail={movieDetail} /> : ""}
      <WatchVideo />
    </React.Fragment>
  );
};

export default Detail;
