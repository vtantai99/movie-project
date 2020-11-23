import { Button, MenuItem, Select } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getMovieListRequest } from "../../redux/action/movieListAction/action";
import {
  fetchMovieList,
  selectMovie,
  fetchTheaterList,
} from "../../redux/action/searchMovieAction/action";

const SearchMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieList());
  }, []);
  useEffect(() => {
    dispatch(fetchTheaterList());
  }, []);
  const nameList = useSelector((state) => state.searchMovieReducer.listFilm);
  const movieDetail = useSelector(
    (state) => state.movieDetailReducer.movieDetail
  );
  const renderNameList = () => {
    return nameList?.map((item, index) => (
      <option value={item.maPhim} key={index}>
        {item.tenPhim}
      </option>
    ));
  };
  const handleChange = (event) => {
    dispatch(selectMovie(event.target.value));
    // const heThongRapArray = movieDetail.lichChieu.map(
    //   (el) => el.lichChieu.thongTinRap.maHeThongRap
    // );
    console.log(movieDetail);
  };
  return (
    <form className="search__movie">
      <div className="search__movie__group movieSelect">
        <select name="movieSelect" onChange={handleChange}>
          <option value="movieSelect" hidden="true" selected="true">
            Chọn Phim
          </option>
          {renderNameList()}
        </select>
      </div>
      <div className="search__movie__group">
        <select name="movieSelect">
          <option value="movieSelect" hidden="true" selected="true">
            Chọn Rạp
          </option>
        </select>
      </div>
      <div className="search__movie__group">
        <select name="movieSelect">
          <option>Ngày xem</option>
        </select>
      </div>
      <div className="search__movie__group">
        <select name="movieSelect">
          <option>Suất chiếu</option>
        </select>
      </div>
      <div className="search__movie__group btnSelect">
        <Button type="button" className="btnBuyTicket">
          MUA VÉ NGAY
        </Button>
      </div>
    </form>
  );
};
export default SearchMovie;
