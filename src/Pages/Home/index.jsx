import React, { Fragment } from "react";
<<<<<<< HEAD

import SearchMovie from "../../Components/SearchMovie";
import OwlCarouselComponent from "../../Components/Carousel";
import Header from "../../Components/Header";
import Greymain from "../../Components/Greymain";
import News from "../../Components/News";
import Movies from "../../Components/Movies";
import Apps from "../../Components/Apps";
import Footer from "../../Components/Footer";
// import TheaterList from "../../Components/TheaterList";

=======
import SearchMovie from "../../Components/SearchMovie";
import OwlCarouselComponent from "../../Components/Carousel";
import Header from "../../Components/Header";
import Showtimes from "../../Components/Showtimes";
import Loading from "../../Components/Loading";
>>>>>>> booking
const Home = () => {
  return (
    <Fragment>
      <Header />
<<<<<<< HEAD
      <OwlCarouselComponent />
      <div className="container">
=======
      <OwlCarouselComponent></OwlCarouselComponent>
      <div class="container">
>>>>>>> booking
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
