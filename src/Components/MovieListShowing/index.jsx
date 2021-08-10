import React from "react";
import { getMovieTrailer } from "../../redux/action/movieDetailAction/actions";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import star from "../../Assets/Images/star.png";
import starHalf from "../../Assets/Images/starHalf.png";
import movieBomTan from "../../Assets/Images/movieBomTan.png";
import movieKhuyenMai from "../../Assets/Images/movieKhuyenMai.png";
import playIcon from "../../Assets/Images/playIcon.png";

const MovieListShowing = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Hàm gắn sao theo band điểm của phim
  const renderIconStar = (vote) => {
    if (vote === 10) {
      return (
        <>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={starHalf} alt="star" />
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
          <img src={starHalf} alt="star" />
        </>
      );
    }
    if (vote >= 6) {
      return (
        <>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={starHalf} alt="star" />
        </>
      );
    }
    return (
      <>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={starHalf} alt="star" />
      </>
    );
  };
  //Hàm hiện Bom tấn và khuyến mãi nếu đạt điểm
  const renderImageTitle = (vote) => {
    if (vote >= 9) return movieBomTan;
    if (vote >= 7) return movieKhuyenMai;
    return;
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
          {props.movie.danhGia >= 7 && (
            <img
              src={renderImageTitle(props.movie.danhGia)}
              className="item__film__img--title"
              alt="star"
            />
          )}
          <div className="item__film__img--vote">
            <p className="vote--number">{props.movie.danhGia}</p>
            <div className="vote--star">
              {renderIconStar(props.movie.danhGia)}
            </div>
          </div>
          <div className="item__film__img--play">
            <button
              onClick={() => dispatch(getMovieTrailer(props.movie.trailer))}
            >
              <img src={playIcon} alt="play" />
            </button>
          </div>

          <NavLink
            className="item__film__img--overlay"
            to={`/detail/${props.movie.maPhim}`}
          ></NavLink>
        </div>
        <div className="item__film__info">
          <i class="fas fa-film"></i>&nbsp;
          <span className="item__film__info--name">{props.movie.tenPhim}</span>
          <Button
            className="item__film__info--btn"
            onClick={() => history.push(`/detail/${props.movie.maPhim}`)}
          >
            Chi tiết
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieListShowing;
