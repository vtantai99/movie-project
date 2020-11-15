import { Button, MenuItem, Select } from "@material-ui/core";
import React from "react";

const SearchMovie = () => {
  return (
    <form className="search__movie">
      <div className="search__movie__group movieSelect">
        <select name="movieSelect" id="">
          <option>Chọn phim</option>
        </select>
      </div>
      <div className="search__movie__group">
        <select name="movieSelect" id="">
          <option>Chọn rạp</option>
        </select>
      </div>
      <div className="search__movie__group">
        <select name="movieSelect" id="">
          <option>Ngày xem</option>
        </select>
      </div>
      <div className="search__movie__group">
        <select name="movieSelect" id="">
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
