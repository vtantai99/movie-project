import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarouselComponent = () => {
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
            <a href="#">
              <img src="https://tix.vn/app/assets/img/icons/play-video.png" />
            </a>
          </div>
          <div className="carousel__item__overlay"></div>
          <img src="https://kdq-react-movie-app.surge.sh/images/hero4.png" />
        </div>
        <div className="carousel__item">
          <div className="carousel__item__play">
            <a href="#">
              <img src="https://tix.vn/app/assets/img/icons/play-video.png" />
            </a>
          </div>
          <div className="carousel__item__overlay"></div>
          <img src="https://kdq-react-movie-app.surge.sh/images/hero1.jpg" />
        </div>
        <div className="carousel__item">
          <div className="carousel__item__play">
            <a href="#">
              <img src="https://tix.vn/app/assets/img/icons/play-video.png" />
            </a>
          </div>
          <div className="carousel__item__overlay"></div>
          <img src="https://s3img.vcdn.vn/123phim/2020/11/ky-nghi-nho-doi-16042987493885.png" />
        </div>
        <div className="carousel__item">
          <div className="carousel__item__play">
            <a href="#">
              <img src="https://tix.vn/app/assets/img/icons/play-video.png" />
            </a>
          </div>
          <div className="carousel__item__overlay"></div>
          <img src="https://kdq-react-movie-app.surge.sh/images/hero2.png" />
        </div>
      </OwlCarousel>
    </section>
  );
};

export default OwlCarouselComponent;
