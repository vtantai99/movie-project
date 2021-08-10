import { CircularProgress, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieTrailer } from "../../redux/action/movieDetailAction/actions";
import format from "date-format";
import star from "../../Assets/Images/star.png";
import starHalf from "../../Assets/Images/starHalf.png";
import playIcon from "../../Assets/Images/playIcon.png";
import { Fragment } from "react";
const renderIconStar = (vote) => {
  if (vote === 10) {
    return (
      <>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </>
    );
  }
  if (vote >= 8) {
    return (
      <>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </>
    );
  }
  if (vote >= 6) {
    return (
      <>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </>
    );
  }
  return (
    <>
      <img src={star} alt="star" />
      <img src={star} alt="star" />
    </>
  );
};
const DetailInfo = () => {
  const dispatch = useDispatch();

  const { hinhAnh, ngayKhoiChieu, tenPhim, danhGia, trailer, maNhom } =
    useSelector((state) => state.movieDetailReducer.movieDetail);
  const { isLight } = useSelector((state) => state.themeReducer);
  return (
    <Fragment>
      <div className="detail__info">
        <div className="detail__info__img">
          <img src={hinhAnh} alt="tenPhim" />
        </div>
        <div
          className="detail__info__fog"
          style={
            isLight
              ? { background: "linear-gradient(0deg, #0a2029, transparent)" }
              : { background: "linear-gradient(0deg, #111827, transparent)" }
          }
        ></div>
        <div className="detail__info__content container">
          <div className="content__text">
            <div className="content__text__img">
              <img src={hinhAnh} alt="tenPhim" />
              <div className="trailer">
                <button
                  className="trailer__btn"
                  onClick={() => dispatch(getMovieTrailer(trailer))}
                >
                  <img src={playIcon} alt="playIcon" />
                </button>
              </div>
            </div>
            <div className="content__text__info">
              <small>{format("dd/MM/yyyy", new Date(ngayKhoiChieu))}</small>
              <span className="name__movie">
                <i className="fas fa-film"></i>&nbsp;
                {tenPhim}
              </span>
              <small className="digital__movie">
                120 phút - {danhGia} IMDb - 2D/Digital
              </small>
              {maNhom === "GP09" && (
                <a className="btn__movie" href="#lich">
                  MUA VÉ
                </a>
              )}
            </div>
          </div>
          <div className="content__rating">
            <div className="content__rating__item">
              <CircularProgress
                variant="static"
                value={(danhGia * 100) / 10}
                className="vote__movie"
                size={120}
                thickness={3.0}
              ></CircularProgress>
              <div className="rating__border"></div>
              <Typography className="rating">{danhGia}</Typography>
            </div>
            <div className="content__rating__vote">
              {renderIconStar(danhGia)}
              <img src={starHalf} alt="half" />
            </div>
          </div>
        </div>
      </div>
      <div className="detail__info__rps">
        <div className="detail__info__rps__img">
          <img src={hinhAnh} alt="tenPhim" className="info__img" />
          <div className="img__overlay"></div>
          <img
            onClick={() => dispatch(getMovieTrailer(trailer))}
            className="img__btn"
            src={playIcon}
            alt="playIcon"
          />
          <div className="img__vote">
            <p className="vote__number">{danhGia}</p>
            <div className="vote__star">
              {renderIconStar(danhGia)}
              <img src={starHalf} alt="half" />
            </div>
          </div>
        </div>
        <div className="detail__info__rps__content">
          <small>{format("dd/MM/yyyy", new Date(ngayKhoiChieu))}</small>
          <p className="name__movie">
            <i className="fas fa-film"></i>&nbsp;
            {tenPhim}
            <br />
          </p>
          <small className="digital__movie">
            120 phút - {danhGia} IMDb - 2D/Digital
          </small>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailInfo;
