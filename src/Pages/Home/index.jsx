import React, { Fragment } from "react";
import "./home.scss";
import SearchMovie from "../../Components/SearchMovie";
import OwlCarouselComponent from "../../Components/Carousel";
import Header from "../../Components/Header";
import Greymain from "../../Components/Greymain";
import News from "../../Components/News";
import Movies from "../../Components/Movies";
import Apps from "../../Components/Apps";
import Footer from "../../Components/Footer";
// import TheaterList from "../../Components/TheaterList";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <OwlCarouselComponent />
      <div className="container">
        <SearchMovie />
        <Movies />
        <Greymain />
        {/* <TheaterList /> */}
        <News />
      </div>
      <Apps />
      <Footer />
    </Fragment>
  );
};

export default Home;
