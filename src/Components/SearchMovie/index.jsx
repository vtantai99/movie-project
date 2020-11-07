import { Button, MenuItem, Select } from "@material-ui/core";
import React from "react";
import "./searchMovie.scss";
const Booking = () => {
  return (
    <form className="search__movie container">
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
        <Button type="button" class="btnBuyTicket">
          MUA VÉ NGAY
        </Button>
      </div>
    </form>
  );
};
export default Booking;
