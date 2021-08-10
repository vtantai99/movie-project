import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { TextField, makeStyles, Button } from "@material-ui/core";
import swal from "sweetalert";
import { fetchTheaterList } from "../../redux/action/heThongRapAction/actions";
import { fetchMovieDetailRequest } from "../../redux/action/movieDetailAction/actions";
import format from "date-format";
import AdminTicketTable from "../../Components/AdminTicketTable";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: "100%",
  },
}));

const TicketPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { showingList } = useSelector((state) => state.movieListReducer);
  const { user } = useSelector((state) => state.userReducer);
  const { isLight } = useSelector((state) => state.themeReducer);
  const { theaterList } = useSelector((state) => state.heThongRapReducer);

  const [maPhim, setMaPhim] = useState(null);
  const [maHeThongRap, setMaHeThongRap] = useState(null);
  const [cumRap, setCumRap] = useState(null);
  const [rap, setRap] = useState(null);
  const [giaVe, setGiaVe] = useState(null);
  const [listCumRap, setListCumRap] = useState(null);
  const [listRap, setListRap] = useState(null);
  const [ngayChieuGioChieu, setNgayChieuGioChieu] = useState(null);

  useEffect(() => {
    dispatch(fetchTheaterList());
  }, [dispatch]);

  const handleSelectFilm = async (value) => {
    await setMaPhim(null);
    await setMaHeThongRap(null);
    await setCumRap(null);
    await setRap(null);
    await setNgayChieuGioChieu(null);
    await setMaPhim(value);
    await dispatch(fetchMovieDetailRequest(value, history));
  };

  const handleHeThongRap = async (value) => {
    await setNgayChieuGioChieu(null);
    await setRap(null);
    await setCumRap(null);
    await setMaHeThongRap(null);
    await setMaHeThongRap(value);
    const res = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${value}`
    );
    res.status === 200 && (await setListCumRap(res.data));
  };

  const handleCumRap = async (tenCumRap) => {
    await setRap(null);
    await setCumRap(null);
    await setCumRap(tenCumRap);
    const checkList = listCumRap.filter((item) => item.tenCumRap === tenCumRap);
    await setListRap(checkList[0]?.danhSachRap);
  };

  const handleRap = async (value) => {
    await setNgayChieuGioChieu(null);
    await setRap(null);
    await setRap(value);
  };

  const checkButton = () => {
    if (maPhim && maHeThongRap && cumRap && rap && giaVe && ngayChieuGioChieu) {
      return false;
    } else return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rap && giaVe && ngayChieuGioChieu) {
      const time = format("dd/MM/yyyy hh:mm:ss", new Date(ngayChieuGioChieu));
      const data = { maPhim, maRap: rap, giaVe, ngayChieuGioChieu: time };
      axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
        data,
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
        .then((res) => {
          swal({
            title: res.data,
            icon: "success",
          });
          dispatch(fetchMovieDetailRequest(maPhim, history));
        })
        .catch((err) => {
          swal({
            title: err.response.data,
            icon: "error",
          });
        });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mb-3 grid grid-cols-3 gap-5 w-full"
      >
        <select
          onChange={(e) => handleSelectFilm(e.target.value)}
          className={`col-span-1 p-3 focus:outline-none rounded-sm shadow-sm ${
            isLight ? "bg-white" : "bg-gray-800"
          }`}
        >
          <option selected hidden>
            Chọn phim
          </option>
          {showingList.map((item, index) => (
            <option key={index} value={item.maPhim}>
              {item.tenPhim}
            </option>
          ))}
        </select>

        {/* Ma he thong rap */}
        <select
          className={`col-span-1 p-3 focus:outline-none rounded-sm shadow-sm ${
            isLight ? "bg-white" : "bg-gray-800"
          }`}
          onChange={(e) => handleHeThongRap(e.target.value)}
        >
          <option selected hidden>
            Chọn hệ thống rạp
          </option>
          {maPhim ? (
            theaterList?.map((item, index) => (
              <option key={index} value={item.maHeThongRap}>
                {item.tenHeThongRap}
              </option>
            ))
          ) : (
            <option disabled>Vui lòng chọn phim</option>
          )}
        </select>

        {/* Cum rap theo ma rap */}
        <select
          onChange={(e) => handleCumRap(e.target.value)}
          className={`col-span-1 p-3 focus:outline-none rounded-sm shadow-sm ${
            isLight ? "bg-white" : "bg-gray-800"
          }`}
        >
          <option selected hidden>
            Chọn cụm rạp
          </option>
          {maHeThongRap ? (
            listCumRap?.map((item, index) => (
              <option key={index}>{item.tenCumRap}</option>
            ))
          ) : (
            <option disabled>Vui lòng chọn hệ thống rạp</option>
          )}
        </select>
        {/* Rap */}
        <select
          onChange={(e) => handleRap(e.target.value)}
          className={`col-span-1 p-3 focus:outline-none rounded-sm shadow-sm ${
            isLight ? "bg-white" : "bg-gray-800"
          }`}
        >
          <option hidden selected>
            Chọn rạp
          </option>
          {cumRap ? (
            listRap?.map((item, index) => (
              <option key={index} value={item.maRap}>
                {item.tenRap}
              </option>
            ))
          ) : (
            <option disabled>Vui lòng chọn cụm rạp</option>
          )}
        </select>

        {/* Gia ve */}
        <select
          onChange={(e) => setGiaVe(+e.target.value)}
          className={`col-span-1 p-3 focus:outline-none rounded-sm shadow-sm ${
            isLight ? "bg-white" : "bg-gray-800"
          }`}
        >
          <option selected hidden>
            Chọn giá vé
          </option>
          {rap ? (
            <>
              <option value="75000">$75.000</option>
              <option value="100000">$100.000</option>
              <option value="120000">$120.000</option>
              <option value="150000">$150.000</option>
            </>
          ) : (
            <option disabled>Vui lòng chọn rạp</option>
          )}
        </select>
        <div
          className={`col-span-1 p-2 shadow-sm ${
            isLight ? "bg-white" : "bg-gray-800 text-white"
          } rounded-sm`}
        >
          <TextField
            type="datetime-local"
            value={ngayChieuGioChieu}
            onChange={(e) => setNgayChieuGioChieu(e.target.value)}
            className={classes.textField}
          />
        </div>
        <Button
          className="col-start-2 col-end-3"
          type="submit"
          style={
            checkButton()
              ? {
                  background: "#ccc",
                  color: "#fff",
                }
              : {
                  background: "#007be8",
                  color: "#fff",
                }
          }
          disabled={checkButton()}
        >
          Thêm lịch chiếu
        </Button>
      </form>

      <AdminTicketTable maPhim={maPhim} />
    </div>
  );
};

export default TicketPage;
