import React, { Fragment } from "react";
import "../../Assets/Styles/SCSS/Pages/home.scss";
import SearchMovie from "../../Components/SearchMovie";
import OwlCarouselComponent from "../../Components/Carousel";
import Header from "../../Components/Header";
import Greymain from "../../Components/Greymain";
import News from "../../Components/News";
import Apps from "../../Components/Apps";
import Footer from "../../Components/Footer";
import Trailer from "../../Components/Trailer";
import MovieList from "../../Components/MovieList";
import Theaters from "../../Components/Theaters";
import ScrollToTop from "../../Components/ScollToTop";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const { darkMode } = useSelector((state) => state.commonReducer);

  useEffect(async () => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Header />
      <Trailer />
      <OwlCarouselComponent />
      <div className={darkMode ? "home__main Dark" : "home__main"}>
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
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
};

export default Home;
