import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./carousel.scss";
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
          <div
            className="carousel__item__play"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <a href="#">
              <img src="https://tix.vn/app/assets/img/icons/play-video.png" />
            </a>
          </div>
          <div
            className="modal fade show"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ zIndex: "3" }}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div
                className="modal-content"
                style={{ backgroundColor: "rgba(0,0,0)" }}
              >
                <div className="modal-body" style={{ padding: "50% 0 36px" }}>
                  <iframe
                    width="100%"
                    height="85%"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                    autoPlay
                    allowFullScreen
                    src="https://www.youtube.com/embed/s-1DZTSmrk4"
                  />
                </div>
                <div className="modal-footer">
                  <i className="fa fa-times" data-dismiss="modal"></i>
                </div>
              </div>
            </div>
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
