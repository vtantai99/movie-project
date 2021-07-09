import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch } from "react-redux";
import { getMovieTrailer } from "../../redux/action/movieDetailAction/actions";
import carousel1 from "../../Assets/Images/carousel1.png";
import carousel2 from "../../Assets/Images/carousel2.jpeg";
import carousel3 from "../../Assets/Images/carousel3.png";
import carousel4 from "../../Assets/Images/carousel4.png";
import playIcon from "../../Assets/Images/playIcon.png";
const OwlCarouselComponent = () => {
  const dispatch = useDispatch();

  return (
    <section className="carousel">
      <OwlCarousel
        items={1}
        autoplay
        loop
        className="owl-theme"
        nav
        dots
        smartSpeed={600}
        autoplayHoverPause
      >
        <div className="carousel__item">
          <div className="carousel__item__play">
            <button
              onClick={() =>
                dispatch(
                  getMovieTrailer("https://www.youtube.com/embed/IjR6KWVZ1hU")
                )
              }
            >
              <img src={playIcon} alt="playIcon" />
            </button>
          </div>
          <div className="carousel__item__overlay"></div>
          <img src={carousel1} alt="film" />
        </div>
        <div className="carousel__item">
          <div className="carousel__item__play">
            <button
              onClick={() =>
                dispatch(
                  getMovieTrailer("https://www.youtube.com/embed/2AQJW9TFnww")
                )
              }
            >
              <img src={playIcon} alt="playIcon" />
            </button>
          </div>
          <div className="carousel__item__overlay"></div>
          <img src={carousel2} alt="film" />
        </div>
        <div className="carousel__item">
          <div className="carousel__item__play">
            <button
              onClick={() =>
                dispatch(
                  getMovieTrailer("https://www.youtube.com/embed/lAjEKy85E1M")
                )
              }
            >
              <img src={playIcon} alt="playIcon" />
            </button>
          </div>
          <div className="carousel__item__overlay"></div>
          <img src={carousel3} alt="film" />
        </div>
        <div className="carousel__item">
          <div className="carousel__item__play">
            <button
              onClick={() =>
                dispatch(
                  getMovieTrailer("https://www.youtube.com/embed/lnrL-wjyNhQ")
                )
              }
            >
              <img src={playIcon} alt="playIcon" />
            </button>
          </div>
          <div className="carousel__item__overlay"></div>
          <img src={carousel4} alt="film" />
        </div>
      </OwlCarousel>
    </section>
  );
};

export default OwlCarouselComponent;
