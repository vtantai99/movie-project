import React, { Fragment } from "react";
import { getMovieTrailer } from "../../redux/action/movieDetailAction/actions";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
const MovieListShowing = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  return (
    <div className="showing__item">
      <div className="item__film">
        <div
          className="item__film__img"
          style={{
            background: `url(${props.movie.hinhAnh}) center center / cover no-repeat`,
          }}
        >
          <span className="item__film__img--vote">
            <p className="vote--number">{props.movie.danhGia}</p>
            <p className="vote--star">
              <img src="https://tix.vn/app/assets/img/icons/star1.png" />
              <img src="https://tix.vn/app/assets/img/icons/star1.png" />
              <img src="https://tix.vn/app/assets/img/icons/star1.png" />
              <img src="https://tix.vn/app/assets/img/icons/star1.2.png" />
            </p>
          </span>
          <div className="item__film__img--play">
            <button
              onClick={() => dispatch(getMovieTrailer(props.movie.trailer))}
            >
              <img src="https://tix.vn/app/assets/img/icons/play-video.png" />
            </button>
          </div>
          <div className="item__film__img--overlay"></div>
        </div>
        <div className="item__film__info">
          <span className="item__film__info--icon">C18</span>
          <span className="item__film__info--name">{props.movie.tenPhim}</span>
          <Button className="item__film__info--btn">MUA VÉ</Button>
        </div>
      </div>
    </div>
  );
};

export default MovieListShowing;
