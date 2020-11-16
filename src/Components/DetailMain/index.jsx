import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { switchMovieDetailNav } from "../../redux/action/movieDetailAction/actions";
import MovieDetailInfo from "../MovieDetailInfo";
import MovieDetailShowTime from "../MovieDetailShowTime";
import MovieDetailReview from "../MovieDetailReview";
const DetailMain = () => {
  const dispatch = useDispatch();
  const movieDetailReducer = useSelector((state) => state.movieDetailReducer);
  const { movieDetailNav, movieDetail } = movieDetailReducer;

  const renderMovieDetailMain = () => {
    switch (movieDetailNav) {
      case "lichChieu":
        return <MovieDetailShowTime />;
      case "thongTin":
        return <MovieDetailInfo movieDetail={movieDetail} />;
      case "danhGia":
        return <MovieDetailReview />;
    }
  };

  return (
    <div className="detailMain">
      <div className="detailMain_nav">
        <span
          onClick={() => dispatch(switchMovieDetailNav("lichChieu"))}
          className={movieDetailNav === "lichChieu" ? "active" : ""}
        >
          Lịch chiếu
        </span>
        <span
          onClick={() => dispatch(switchMovieDetailNav("thongTin"))}
          className={movieDetailNav === "thongTin" ? "active" : ""}
        >
          Thông tin
        </span>
        <span
          onClick={() => dispatch(switchMovieDetailNav("danhGia"))}
          className={movieDetailNav === "danhGia" ? "active" : ""}
        >
          Đánh giá
        </span>
      </div>
      {renderMovieDetailMain()}
    </div>
  );
};

export default DetailMain;
