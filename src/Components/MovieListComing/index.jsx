import React from "react";
import { getMovieTrailer } from "../../redux/action/movieDetailAction/actions";
import format from "date-format";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import Coming from "./Images/coming.png";
const MovieListComing = (props) => {
  //   console.log(props);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="showing__item">
      <div className="item__film">
        <div
          className="item__film__img"
          style={{
            background: `url(${props.movie.hinhAnh}) center center / cover no-repeat`,
          }}
        >
          <img src={Coming} className="item__film__img--title" />
          <span className="item__film__img--vote">
            <p className="vote--number">
              {format("dd/MM", new Date(props.movie.ngayKhoiChieu))}
            </p>
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
          <span className="item__film__info--icon">C18</span>
          <span
            className="item__film__info--name"
            onClick={() => history.push(`/detail/${props.movie.maPhim}`)}
          >
            {props.movie.tenPhim}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieListComing;
