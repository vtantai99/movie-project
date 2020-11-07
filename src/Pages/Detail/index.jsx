import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DetailInfo from "../../Components/DetailInfo";
import Header from "../../Components/Header";
import { fetchMovieDetailRequest } from "../../redux/action/movieAction/actions";
const Detail = () => {
  useEffect(() => {
    dispatch(fetchMovieDetailRequest(1317));
  }, []);
  const dispatch = useDispatch();
  const movieReducer = useSelector((state) => state.movieReducer);
  const { movieDetail } = movieReducer;
  return (
    <React.Fragment>
      <Header />
      {movieDetail ? <DetailInfo movieDetail={movieDetail} /> : ""}
    </React.Fragment>
  );
};

export default Detail;
