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

  const listCarousel = [
    { image: carousel1, trailer: "https://www.youtube.com/embed/vTHVebsV49A" },
    { image: carousel2, trailer: "https://www.youtube.com/embed/2AQJW9TFnww" },
    { image: carousel3, trailer: "https://www.youtube.com/embed/lAjEKy85E1M" },
    { image: carousel4, trailer: "https://www.youtube.com/embed/lnrL-wjyNhQ" },
  ];

  return (
    <section className="carousel">
      <OwlCarousel
        items={1}
        // autoplay
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
