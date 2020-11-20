import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { getMovieTrailer } from "../../redux/action/movieDetailAction/actions";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getMovieListRequest } from "../../redux/action/movieListAction/action";
import MovieListShowing from "../MovieListShowing";
import MovieListComing from "../MovieListComing";
const MovieList = () => {
  const options = {
    responsive: {
      0: {
        items: 2,
      },

      600: {
        items: 2,
      },

      1000: {
        items: 4,
      },
    },
  };
  const dispatch = useDispatch();
  // Call API va dispatch list phim (Dang chieu va sap chieu)
  useEffect(() => {
    dispatch(getMovieListRequest("GP07", "GP02"));
  }, []);
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
    <section className="showTime" id="showTimes">
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
          {showingList.length && (
            <OwlCarousel
              items={4}
              autoplay
              loop
              className="owl-theme"
              nav
              dots={false}
              smartSpeed={600}
              autoplayHoverPause
              {...options}
            >
              {renderMovieShowing()}
            </OwlCarousel>
          )}
          {/* {renderMovieList()} */}
        </div>
        <div className="tab-pane fade comingSoon" id="comingSoon">
          {comingList.length && (
            <OwlCarousel
              items={4}
              autoplay
              loop
              className="owl-theme"
              nav
              dots={false}
              smartSpeed={600}
              autoplayHoverPause
              {...options}
            >
              {renderMovieComing()}
            </OwlCarousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
