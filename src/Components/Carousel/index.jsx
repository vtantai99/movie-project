import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch } from "react-redux";
import { getMovieTrailer } from "../../redux/action/movieDetailAction/actions";
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
              <img src="https://tix.vn/app/assets/img/icons/play-video.png" />
            </button>
          </div>
          <div className="carousel__item__overlay"></div>
          <img src="https://kdq-react-movie-app.surge.sh/images/hero4.png" />
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
              <img src="https://tix.vn/app/assets/img/icons/play-video.png" />
            </button>
          </div>
          <div className="carousel__item__overlay"></div>
          <img src="https://kdq-react-movie-app.surge.sh/images/hero1.jpg" />
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
              <img src="https://tix.vn/app/assets/img/icons/play-video.png" />
            </button>
          </div>
          <div className="carousel__item__overlay"></div>
          <img src="https://s3img.vcdn.vn/123phim/2020/11/ky-nghi-nho-doi-16042987493885.png" />
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
              <img src="https://tix.vn/app/assets/img/icons/play-video.png" />
            </button>
          </div>
          <div className="carousel__item__overlay"></div>
          <img src="https://kdq-react-movie-app.surge.sh/images/hero2.png" />
        </div>
      </OwlCarousel>
    </section>
  );
};

export default OwlCarouselComponent;
