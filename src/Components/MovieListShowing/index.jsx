import React, { Fragment } from "react";
import { getMovieTrailer } from "../../redux/action/movieDetailAction/actions";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import Bomtan from "./Images/bom_tan.png";
import Khuyenmai from "./Images/khuyenmai.png";
const MovieListShowing = (props) => {
  //   console.log(props);
  const dispatch = useDispatch();
  const history = useHistory();
  const renderIconStar = (vote) => {
    if (vote === 10) {
      return (
        <>
          <img src="https://tix.vn/app/assets/img/icons/star1.png" />
          <img src="https://tix.vn/app/assets/img/icons/star1.png" />
          <img src="https://tix.vn/app/assets/img/icons/star1.png" />
          <img src="https://tix.vn/app/assets/img/icons/star1.png" />
          <img src="https://tix.vn/app/assets/img/icons/star1.png" />
          <img src="https://tix.vn/app/assets/img/icons/star1.2.png" />
        </>
      );
    }
    if (vote >= 8) {
      return (
        <>
          <img src="https://tix.vn/app/assets/img/icons/star1.png" />
          <img src="https://tix.vn/app/assets/img/icons/star1.png" />
          <img src="https://tix.vn/app/assets/img/icons/star1.png" />
          <img src="https://tix.vn/app/assets/img/icons/star1.png" />
          <img src="https://tix.vn/app/assets/img/icons/star1.2.png" />
        </>
      );
    }
    if (vote >= 6) {
      return (
        <>
          <img src="https://tix.vn/app/assets/img/icons/star1.png" />
          <img src="https://tix.vn/app/assets/img/icons/star1.png" />
          <img src="https://tix.vn/app/assets/img/icons/star1.png" />
          <img src="https://tix.vn/app/assets/img/icons/star1.2.png" />
        </>
      );
    }
    return (
      <>
        <img src="https://tix.vn/app/assets/img/icons/star1.png" />
        <img src="https://tix.vn/app/assets/img/icons/star1.png" />
        <img src="https://tix.vn/app/assets/img/icons/star1.2.png" />
      </>
    );
  };
  const renderImageTitle = (vote) => {
    if (vote >= 9) return Bomtan;
    if (vote >= 7) return Khuyenmai;
    return null;
  };
  return (
    <div className="showing__item">
      <div className="item__film">
        <div
          className="item__film__img"
          style={{
            background: `url(${props.movie.hinhAnh}) center center / cover no-repeat`,
          }}
        >
          <img
            src={renderImageTitle(props.movie.danhGia)}
            className="item__film__img--title"
          />
          <span className="item__film__img--vote">
            <p className="vote--number">{props.movie.danhGia}</p>
            <p className="vote--star">{renderIconStar(props.movie.danhGia)}</p>
          </span>
          <div className="item__film__img--play">
            <button
              onClick={() => dispatch(getMovieTrailer(props.movie.trailer))}
            >
              <img src="https://tix.vn/app/assets/img/icons/play-video.png" />
            </button>
          </div>

          <NavLink
            className="item__film__img--overlay"
            to={`/detail/${props.movie.maPhim}`}
          ></NavLink>
        </div>
        <div className="item__film__info">
          <span className="item__film__info--icon">P</span>
          <span className="item__film__info--name">{props.movie.tenPhim}</span>
          <Button
            className="item__film__info--btn"
            onClick={() => history.push(`/detail/${props.movie.maPhim}`)}
          >
            MUA VÉ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieListShowing;
