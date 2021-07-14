import React, { useEffect, Fragment } from "react";
import "../../Assets/Styles/SCSS/Pages/detail.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DetailInfo from "../../Components/DetailInfo";
import DetailMain from "../../Components/DetailMain";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Trailer from "../../Components/Trailer";
import {
  fetchMovieDetailRequest,
  refreshDate,
  updateCodeTheater,
  updateCodeTheaterMobile,
} from "../../redux/action/movieDetailAction/actions";
import { fetchTheaterList } from "../../redux/action/heThongRapAction/actions";
import ScrollToTop from "../../Components/ScollToTop";
const Detail = () => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    const movieId = params.movieId;
    dispatch(fetchMovieDetailRequest(movieId, history));
    dispatch(fetchTheaterList());
    dispatch(refreshDate(new Date().getDate())); // Khi mà return page detail thì refresh date, tự chọn ngày hiện tại
    dispatch(updateCodeTheaterMobile(""));
    dispatch(updateCodeTheater("BHDStar")); // Giống như refresh ngày, cái này refresh theater
  }, []);
  const { movieDetail } = useSelector((state) => state.movieDetailReducer);
  return (
    <Fragment>
      {/* <Header /> */}
      {movieDetail ? (
        <section className="detail">
          <DetailInfo />
          <DetailMain />
        </section>
      ) : (
        ""
      )}
      <Footer />
      <ScrollToTop />
      <Trailer />
    </Fragment>
  );
};
export default Detail;
