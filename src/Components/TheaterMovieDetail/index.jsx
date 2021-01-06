import React, { Fragment, useState } from "react";
import TheaterMovieDetailTime from "../TheaterMovieDetailTime";

const TheaterMovieDetail = (props) => {
  const renderMovieDetail = () => {
    return props.movieDetail.danhSachPhim.map((item, index) => (
      <div className="movie__item" key={index}>
        <div
          className="movie__item__main"
          data-toggle="collapse"
          data-target={`#boy-${item.maPhim}`}
          aria-expanded="false"
          role="button"
        >
          <img
            className="movie__item__main--img"
            src={item.hinhAnh}
            alt={item.tenPhim}
          />
          <div className="movie__item__main--info">
            <span className="info__name">
              <span className="info__name__age">P</span>&nbsp;-&nbsp;
              {item.tenPhim}
            </span>
            <span className="info__name__des">120 phút - TIX 9.0</span>
          </div>
        </div>
        <div
          className="movie__item__time collapse show"
          id={`boy-${item.maPhim}`}
        >
          <p className="movie__item__time--digital">2D Digital</p>
          <div className="movie__item__time--detail">
            <TheaterMovieDetailTime movieTime={item} />
          </div>
        </div>
      </div>
    ));
  };
  return <Fragment>{renderMovieDetail()}</Fragment>;
};

export default TheaterMovieDetail;
