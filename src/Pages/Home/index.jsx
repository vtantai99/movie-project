import React, { Fragment, useEffect } from "react";
import "../../Assets/Styles/SCSS/Pages/home.scss";
import SearchMovie from "../../Components/SearchMovie";
import OwlCarouselComponent from "../../Components/Carousel";
import Greymain from "../../Components/Greymain";
import News from "../../Components/News";
import Apps from "../../Components/Apps";
import MovieList from "../../Components/MovieList";
import Theaters from "../../Components/Theaters";
import { useDispatch, useSelector } from "react-redux";
import {
  startLoading,
  stopLoading,
} from "../../redux/action/commonAction/actions";
import { getMovieListRequest } from "../../redux/action/movieListAction/action";
import {
  GET_COMING_LIST,
  GET_SHOWING_LIST,
} from "../../redux/action/movieListAction/actionTypes";
import {
  fetchTheaterList,
  fetchTheaterListDetail,
} from "../../redux/action/heThongRapAction/actions";

const Home = () => {
  const dispatch = useDispatch();

  const { isLight } = useSelector((state) => state.themeReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(async () => {
    await dispatch(startLoading());
    await Promise.all([
      dispatch(getMovieListRequest("GP09", GET_SHOWING_LIST)),
      dispatch(getMovieListRequest("GP03", GET_COMING_LIST)),
      dispatch(fetchTheaterList()),
      dispatch(fetchTheaterListDetail()),
    ]);
    // Dữ liệu sẽ đẩy lên redux ở action, nên phải dùng setTimeout đợi xong mới stopLoading
    setTimeout(() => {
      dispatch(stopLoading());
    }, 500);
  }, []);

  return (
    <Fragment>
      <OwlCarouselComponent />
      <div
        className={`${
          !isLight && "bg-gray-900 text-white"
        } home__main transition`}
      >
        <div className="container">
          <SearchMovie />
          <MovieList />
          <Greymain />
          <Theaters />
          <Greymain />
          <News />
        </div>
      </div>
      <Apps />
    </Fragment>
  );
};

export default Home;
