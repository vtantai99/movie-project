import React, { Fragment } from "react";
import SearchMovie from "../../Components/SearchMovie";
import OwlCarouselComponent from "../../Components/Carousel";
import Header from "../../Components/Header";
import Showtimes from "../../Components/Showtimes";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <OwlCarouselComponent></OwlCarouselComponent>
      <div class="container">
        <SearchMovie />
        <Showtimes />
      </div>
    </Fragment>
  );
};

export default Home;
