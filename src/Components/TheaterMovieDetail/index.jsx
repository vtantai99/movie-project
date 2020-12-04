import React, { Fragment } from "react";

const TheaterMovieDetail = (props) => {
  //   console.log(props.movieDetail);

  const renderMovieDetail = () => {
    return props.movieDetail.danhSachPhim.map((item) => (
      <div className="movie__item">
        <div className="movie__item__main">
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
            <span className="info__name__des">120 phút - TIX 9.0 - IMDb 0</span>
          </div>
        </div>
      </div>
    ));
  };
  return <Fragment>{renderMovieDetail()}</Fragment>;
};

export default TheaterMovieDetail;
