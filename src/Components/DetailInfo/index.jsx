import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { getMovieTrailer } from "../../redux/action/movieDetailAction/actions";
import format from "date-format";
import half from "./Images/half.png";
import star from "./Images/star.png";
import { Fragment } from "react";
const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#fb4226",
    color: "#fff",
  },
  playControl: {
    padding: "10px 12px",
    border: "2px solid #fff",
    borderRadius: "100%",
    cursor: "pointer",
  },
}));
const renderIconStar = (vote) => {
  if (vote === 10) {
    return (
      <>
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </>
    );
  }
  if (vote >= 8) {
    return (
      <>
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </>
    );
  }
  if (vote >= 6) {
    return (
      <>
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </>
    );
  }
  return (
    <>
      <img src={star} />
      <img src={star} />
    </>
  );
};
const DetailInfo = ({ movieDetail }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const {
    hinhAnh,
    ngayKhoiChieu,
    moTa,
    biDanh,
    tenPhim,
    maPhim,
    danhGia,
    trailer,
  } = movieDetail;
  return (
    <Fragment>
      <div className="detail_info">
        <div className="detail_info__img">
          <img src={hinhAnh} alt="tenPhim" />
        </div>
        <div className="detail_info_fog"></div>
        <div className="detail_info_content">
          <div className="detail_info_content_text">
            <div className="img_container">
              <img src={hinhAnh} />
              <div className="play_trailer_btn">
                <button
                  className="play_trailer_btn__icon"
                  onClick={() => dispatch(getMovieTrailer(trailer))}
                >
                  <img src="https://tix.vn/app/assets/img/icons/play-video.png" />
                </button>
              </div>
            </div>
            <div className="detail_info_content_text_info">
              <small>{format("dd/MM/yyyy", new Date(ngayKhoiChieu))}</small>
              <Typography className="name__movie">
                <span>P</span>
                {tenPhim}
                <br />
              </Typography>
              <small className="digital__movie">
                120 phút - {danhGia} IMDb - 2D/Digital
              </small>
              <Button className="btn__movie" variant="contained">
                Mua vé
              </Button>
            </div>
          </div>
          <div className="detail_info_content_rating">
            <div className="detail_info_content_rating__item">
              <CircularProgress
                variant="static"
                value={(danhGia * 100) / 10}
                className="vote__movie"
                size={120}
                thickness={3.0}
              ></CircularProgress>
              <div className="rating_border"></div>
              <Typography className="rating">{danhGia}</Typography>
            </div>
            <div className="detail_info_content_rating__vote">
              {renderIconStar(danhGia)}
              <img src={half} alt="half" />
            </div>
          </div>
        </div>
      </div>
      <div className="detail__info__rps">
        <div className="detail__info__rps__img">
          <img src={hinhAnh} alt="tenPhim" className="info__img" />
          <div className="img__overlay"></div>
          <img
            className="img__btn"
            src="https://tix.vn/app/assets/img/icons/play-video.png"
          />
          <div className="img__vote">
            <p className="vote__number">{danhGia}</p>
            <div className="vote__star">
              {renderIconStar(danhGia)}
              <img src={half} alt="half" />
            </div>
          </div>
        </div>
        <div className="detail__info__rps__content">
          <small>{format("dd/MM/yyyy", new Date(ngayKhoiChieu))}</small>
          <p className="name__movie">
            <span>P</span>
            {tenPhim} (P)
            <br />
          </p>
          <small className="digital__movie">
            120 phút - {danhGia} IMDb - 2D/Digital
          </small>
          {/* <Button className="btn__movie" variant="contained">
                Mua vé
              </Button> */}
        </div>
      </div>
    </Fragment>
  );
};

export default DetailInfo;
