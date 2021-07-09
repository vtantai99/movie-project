import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import format from "date-format";
import { useHistory } from "react-router-dom";
import {
  fetchMovieList,
  selectTheater,
  selectDay,
  addNameTheater,
  addNameMovie,
  addNameDate,
  addCode,
  refreshFilm,
  getHoursList,
  refreshTheater,
  refreshDate,
} from "../../redux/action/searchMovieAction/action";
const SearchMovie = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { darkMode } = useSelector((state) => state.commonReducer);
  useEffect(() => {
    dispatch(fetchMovieList());
    dispatch(refreshFilm());
    dispatch(refreshTheater());
    dispatch(refreshDate());
  }, []);
  // Hiển thị phim
  const nameList = useSelector((state) => state.searchMovieReducer.listFilm);
  const renderNameList = () => {
    return nameList?.map((item, index) => (
      <option id={item.maPhim} value={item.tenPhim} key={index}>
        {item.tenPhim}
      </option>
    ));
  };
  /** Hiển thị Rạp */
  const theaterList = useSelector(
    (state) => state.searchMovieReducer.listTheaterSelected.heThongRapChieu
  );
  const renderTheaterList = () => {
    return theaterList?.map((item) =>
      item.cumRapChieu.map((item, index) => (
        <option
          key={index}
          value={item.tenCumRap}
          id={[item.lichChieuPhim.map((item) => item.maLichChieu)]}
        >
          {item.tenCumRap}
        </option>
      ))
    );
  };
  /** Hien thi ngay chieu */
  const { codeFilm, listTime, nameTheater, nameMovie, nameDate, code } =
    useSelector((state) => state.searchMovieReducer);
  const renderDayList = () => {
    const checkListTime = listTime.map((item) => {
      return format("dd/MM/yyyy", new Date(item.ngayChieuGioChieu));
    });
    // Xoá những ngày chiếu trùng nhau
    const filterCheckListTime = checkListTime.filter(
      (item, index) => checkListTime.indexOf(item) === index
    );
    return filterCheckListTime?.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
  };
  const checkStatusDate = () => {
    if (!nameMovie && !nameTheater)
      return <option disabled>Vui lòng chọn Phim và rạp</option>;
    else if (nameMovie && !nameTheater)
      return <option disabled>Vui lòng chọn rạp</option>;
    return renderDayList();
  };
  /**  END hien thi ngay chieu */

  /**Hien thi gio chieu */
  const listHours = useSelector((state) => state.searchMovieReducer.listHours);
  const renderHour = () => {
    return listHours?.map((item, index) => (
      <option key={index} value={item.maLichChieu}>
        {format("hh:mm", new Date(item.ngayChieuGioChieu))}
      </option>
    ));
  };
  const checkStatusHours = () => {
    if (!nameMovie && !nameTheater && !nameDate)
      return <option disabled>Vui lòng chọn Phim và Rạp và Ngày chiếu</option>;
    else if (nameMovie && !nameTheater && !nameDate)
      return <option disabled>Vui lòng chọn Rạp và Ngày chiếu</option>;
    else if (nameMovie && nameTheater && !nameDate)
      return <option disabled>Vui lòng chọn Ngày chiếu</option>;
    return renderHour();
  };
  const checkStatusButton = () => {
    if (nameMovie && nameTheater && nameDate && code) return true;
    return false;
  };
  /**Thao tac on Change */
  // Khi ấn chọn Phim => Gửi API để lấy hệ thống rạp
  const handleSelectFilm = async (event) => {
    // Lấy id của option đã chọn
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const option = el.getAttribute("id");
    // gọi API hệ thống rạp
    await dispatch(selectTheater(option));
    await dispatch(addNameMovie(event.target.value));
  };
  //   Khi ấn chọn Rạp => render ngày chiếu
  const handleSelectTheater = async (event) => {
    await dispatch(addNameTheater(event.target.value));
    await dispatch(selectDay(codeFilm));
  };
  //   Khi ấn chọn ngày => render giờ chiếu
  const handleSelectDate = async (event) => {
    await dispatch(addNameDate(event.target.value));
    await dispatch(getHoursList());
  };
  const handleSelectHours = (event) => {
    dispatch(addCode(event.target.value));
  };
  // Lấy isLoading và dùng nó để thay đổi Rap => Dang tìm rạp khi call API rap
  const isLoading = useSelector((state) => state.searchMovieReducer.isLoading);
  return (
    <form
      className="search__movie"
      className={darkMode ? "search__movie Dark" : "search__movie"}
    >
      <div className="search__movie__group movieSelect">
        <select
          className={darkMode ? "Dark" : ""}
          name="movieSelect"
          onChange={handleSelectFilm}
        >
          <option value="movieSelect" hidden selected>
            Chọn Phim
          </option>
          {renderNameList()}
        </select>
      </div>
      <div className="search__movie__group">
        <select
          className={darkMode ? "Dark" : ""}
          name="theaterSelect"
          disabled={isLoading ? true : false}
          onChange={handleSelectTheater}
        >
          <option value="movieSelect" hidden selected>
            {isLoading ? "Đang tìm rạp..." : "Chọn rạp"}
          </option>
          {theaterList ? (
            renderTheaterList()
          ) : (
            <option disabled>Vui lòng chọn phim</option>
          )}
        </select>
      </div>
      <div className="search__movie__group">
        <select
          className={darkMode ? "Dark" : ""}
          name="dateSelect"
          onChange={handleSelectDate}
        >
          <option hidden selected>
            Ngày chiếu
          </option>
          {checkStatusDate()}
        </select>
      </div>
      <div className="search__movie__group">
        <select
          className={darkMode ? "Dark" : ""}
          name="hourSelect"
          onChange={handleSelectHours}
        >
          <option hidden selected>
            Giờ chiếu
          </option>
          {checkStatusHours()}
        </select>
      </div>
      <div className="search__movie__group btnSelect">
        <Button
          type="button"
          className="btnBuyTicket"
          disabled={checkStatusButton() ? false : true}
          onClick={
            checkStatusButton() ? () => history.push(`/booking/${code}`) : ""
          }
          style={
            checkStatusButton()
              ? {
                  background: "linear-gradient(270deg, #fb4226, #ce3017)",
                  borderColor: "D33219",
                }
              : { backgroundColor: "#E58475", borderColor: "#E58475" }
          }
        >
          MUA VÉ NGAY
        </Button>
      </div>
    </form>
  );
};
export default SearchMovie;
