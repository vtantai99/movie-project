import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch } from "react-redux";
import { getMovieTrailer } from "../../redux/action/movieDetailAction/actions";
import playIcon from "../../Assets/Images/playIcon.png";
import { listCarousel } from "../../Helper/DataFake/listCarousel";

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
        {listCarousel.map((item, index) => (
          <div className="carousel__item" key={index}>
            <img src={item.image} alt="film" />
            <div className="carousel__item__play">
              <button onClick={() => dispatch(getMovieTrailer(item.trailer))}>
                <img src={playIcon} alt="playIcon" />
              </button>
            </div>
            <div className="carousel__item__overlay"></div>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
};

export default OwlCarouselComponent;
