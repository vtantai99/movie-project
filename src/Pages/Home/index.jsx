import React, { Fragment } from "react";

import SearchMovie from "../../Components/SearchMovie";
import OwlCarouselComponent from "../../Components/Carousel";
import Header from "../../Components/Header";
import Greymain from "../../Components/Greymain";
import News from "../../Components/News";
import Movies from "../../Components/Movies";
import Apps from "../../Components/Apps";
import Footer from "../../Components/Footer";
import WatchVideo from "../../Components/WatchVideo";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <WatchVideo />
      <OwlCarouselComponent />
      <div className="container">
        <SearchMovie />
        <Movies />
        <Greymain />
        <News />
      </div>
      <Apps />
      <Footer />
    </Fragment>
  );
};

export default Home;
