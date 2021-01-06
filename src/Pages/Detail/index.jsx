import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailInfo from "../../Components/DetailInfo";
import DetailMain from "../../Components/DetailMain";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import WatchVideo from "../../Components/WatchVideo";
import { fetchMovieDetailRequest } from "../../redux/action/movieDetailAction/actions";
const Detail = () => {
  const params = useParams();
  useEffect(() => {
    const movieId = params.movieId;
    dispatch(fetchMovieDetailRequest(movieId));
  }, []);
  const dispatch = useDispatch();
  const movieDetailReducer = useSelector((state) => state.movieDetailReducer);
  const { movieDetail } = movieDetailReducer;
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
      <Footer />
      <WatchVideo />
    </React.Fragment>
  );
};

export default Detail;
