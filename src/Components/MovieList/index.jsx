import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

import MovieListShowing from "../MovieListShowing";
import MovieListComing from "../MovieListComing";

const MovieList = () => {
  const { darkMode } = useSelector((state) => state.commonReducer);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    responsive: [
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  //   Lay danh sach phim dang chieu va render ra man hinh
  const showingList = useSelector(
    (state) => state.movieListReducer.showingList
  );
  const renderMovieShowing = () => {
    return showingList?.map((movie, index) => (
      <MovieListShowing movie={movie} key={index} />
    ));
  };
  //   Lay danh sach phim sap chieu va render ra man hinh
  const comingList = useSelector((state) => state.movieListReducer.comingList);
  const renderMovieComing = () => {
    return comingList?.map((movie, index) => (
      <MovieListComing movie={movie} key={index} />
    ));
  };
  return (
    <section
      className={darkMode === true ? "showTime Dark" : "showTime"}
      id="showTimes"
    >
      <ul className="nav nav-tabs navCenter">
        <li className="nav-item">
          <a
            className="nav-link showing active"
            data-toggle="tab"
            href="#showing"
          >
            Đang Chiếu
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link comingSoon"
            data-toggle="tab"
            href="#comingSoon"
          >
            Sắp Chiếu
          </a>
        </li>
      </ul>
      {/* <!-- Tab panes --> */}
      <div className="tab-content">
        <div className="tab-pane active showing" id="showing">
          <Slider {...settings}>{renderMovieShowing()}</Slider>
        </div>
        <div className="tab-pane fade comingSoon" id="comingSoon">
          {comingList.length && (
            <Slider {...settings}>{renderMovieComing()}</Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
