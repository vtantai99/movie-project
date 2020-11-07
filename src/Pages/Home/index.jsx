import React, { Fragment } from "react";
import SearchMovie from "../../SearchMovie";
import OwlCarouselComponent from "../../Carousel";
import Header from "../../Header";
import Showtimes from "../../Showtimes";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <OwlCarouselComponent />
      <div class="container">
        <SearchMovie />
        <Showtimes />
      </div>
    </Fragment>
  );
};

export default Home;
