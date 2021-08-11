import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import format from "date-format";
import { useHistory } from "react-router-dom";
import {
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

  const { isLight } = useSelector((state) => state.themeReducer);

  useEffect(() => {
    dispatch(refreshFilm());
    dispatch(refreshTheater());
    dispatch(refreshDate());
  }, [dispatch]);

  // Hiển thị phim
  const { showingList } = useSelector((state) => state.movieListReducer);

  const renderListMovie = () => {
    return showingList?.map((item, index) => (
      <option id={item.maPhim} value={item.tenPhim} key={index}>
        {item.tenPhim}
      </option>
    ));
  };

  /** Hiển thị Rạp */
  const { heThongRapChieu } = useSelector(
    (state) => state.searchMovieReducer.listTheater
  );

  // Lấy isLoading và dùng nó để thay đổi Rap => Dang tìm rạp khi call API rap
  const { isLoading } = useSelector((state) => state.searchMovieReducer);

  const renderTheaterList = () => {
    return heThongRapChieu?.map((item) =>
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
      return <option disabled>Vui lòng chọn Phim, Rạp và Ngày chiếu</option>;
    else if (nameMovie && !nameTheater && !nameDate)
      return <option disabled>Vui lòng chọn Rạp và Ngày chiếu</option>;
    else if (nameMovie && nameTheater && !nameDate)
      return <option disabled>Vui lòng chọn Ngày chiếu</option>;
    return renderHour();
  };

  /**Thao tac on Change */
  // Khi ấn chọn Phim => Gửi API để lấy hệ thống rạp
  const handleSelectFilm = async (event) => {
    // Lấy id của option đã chọn
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const option = el.getAttribute("id");
    await dispatch(refreshFilm());
    await dispatch(selectTheater(option)); // gọi API hệ thống rạp
    await dispatch(addNameMovie(event.target.value));
  };

  //   Khi ấn chọn Rạp => render ngày chiếu
  const handleSelectTheater = async (event) => {
    await dispatch(addNameTheater(event.target.value));
    await dispatch(selectDay(codeFilm));
    await dispatch(refreshTheater());
  };

  //   Khi ấn chọn ngày => render giờ chiếu
  const handleSelectDate = async (event) => {
    await dispatch(addNameDate(event.target.value));
    await dispatch(getHoursList());
  };

  const handleSelectHours = (event) => {
    dispatch(addCode(event.target.value));
  };

  return (
    <form
      className={`${
        !isLight && "bg-gray-800 text-white"
      } search__movie transition`}
    >
      <div className="search__movie__group movieSelect">
        <select
          name="movieSelect"
          onChange={handleSelectFilm}
          style={{ background: `${isLight ? "white" : "#1F2937"}` }}
        >
          <option hidden selected>
            Chọn Phim
          </option>
          {renderListMovie()}
        </select>
      </div>
      <div className="search__movie__group">
        <select
          name="theaterSelect"
          disabled={isLoading ? true : false}
          onChange={handleSelectTheater}
          style={{ background: `${isLight ? "white" : "#1F2937"}` }}
        >
          <option hidden selected>
            {isLoading ? "Đang tìm rạp" : "Chọn rạp"}
          </option>
          {heThongRapChieu ? (
            renderTheaterList()
          ) : (
            <option disabled>Vui lòng chọn phim</option>
          )}
        </select>
      </div>
      <div className="search__movie__group">
        <select
          name="dateSelect"
          onChange={handleSelectDate}
          style={{ background: `${isLight ? "white" : "#1F2937"}` }}
        >
          <option hidden selected>
            Ngày chiếu
          </option>
          {checkStatusDate()}
        </select>
      </div>
      <div className="search__movie__group">
        <select
          name="hourSelect"
          onChange={handleSelectHours}
          style={{ background: `${isLight ? "white" : "#1F2937"}` }}
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
          disabled={code ? false : true}
          onClick={code ? () => history.push(`/booking/${code}`) : ""}
          style={
            code
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
