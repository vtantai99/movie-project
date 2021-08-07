import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import swal from "sweetalert";
const TicketPage = () => {
  const movieListReducer = useSelector((state) => state.movieListReducer);
  const { showingList } = movieListReducer;

  const userReducer = useSelector((state) => state.userReducer);
  const { user } = userReducer;

  const [maPhim, setMaPhim] = useState(null);
  const [maHeThongRap, setMaHeThongRap] = useState(null);
  const [cumRap, setCumRap] = useState(null);
  const [rap, setRap] = useState(null);
  const [giaVe, setGiaVe] = useState(null);
  const [ngayChieuGioChieu, setNgayChieuGioChieu] =
    useState("2021-08-24T10:30");

  const [listOfCumRap, setListOfCumRap] = useState([]);
  const [danhSachRap, setDanhSachRap] = useState([]);

  const themeReducer = useSelector((state) => state.themeReducer);
  const { isLight } = themeReducer;

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      width: "100%",
      color: "red",
      //   backgroundColor: isLight ? "white" : "#3F3F46",
      padding: "10px",
      borderRadius: "5px",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    if (maHeThongRap) {
      axios
        .get(
          `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
        )
        .then((res) => {
          setListOfCumRap(res.data);
        });
    }
  }, [maHeThongRap]);

  useEffect(() => {
    if (cumRap)
      setDanhSachRap(
        listOfCumRap.find((el) => el.maCumRap === cumRap)?.danhSachRap
      );
  }, [cumRap]);

  useEffect(() => {
    if (danhSachRap?.length > 0) setRap(danhSachRap[0].maRap);
  }, [danhSachRap]);

  useEffect(() => {
    if (listOfCumRap.length > 0) setCumRap(listOfCumRap[0].maCumRap);
  }, [listOfCumRap]);

  const heThongRapReducer = useSelector((state) => state.heThongRapReducer);
  const { theaterList } = heThongRapReducer;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rap && giaVe && ngayChieuGioChieu) {
      const time = new Date(ngayChieuGioChieu);
      const finalTime = `${("0" + time.getDate()).slice(-2)}/${(
        "0" + time.getMonth()
      ).slice(-2)}/${time.getFullYear()} ${("0" + time.getHours()).slice(
        -2
      )}:${("0" + time.getMinutes()).slice(-2)}:00`;
      console.log(finalTime);
      const data = { maPhim, maRap: rap, giaVe, ngayChieuGioChieu: finalTime };

      axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
        data,
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
        .then(() => {
          swal({
            title: "Them lich chieu thanh cong",
            icon: "success",
          });
        })
        .catch((err) => {
          swal({
            title: err.response.data,
            icon: "error",
          });
        });
    } else {
      swal({
        title: "Xin hay hoan tat tat ca thong tin",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-10 md:max-w-3xl w-full">
        <div className="grid md:grid-cols-2 gap-10 w-full">
          <div>
            <select
              onChange={(e) => setMaPhim(e.target.value)}
              className={`p-3 focus:outline-none rounded-sm shadow-sm ${
                isLight ? "bg-white" : "bg-gray-800"
              }`}
              aria-expanded={true}
            >
              <option value={null} selected disabled>
                Chon phim
              </option>
              {showingList?.length > 0 &&
                showingList.map((item, idx) => (
                  <option value={item.maPhim} key={idx}>
                    {item.tenPhim}
                  </option>
                ))}
            </select>
          </div>

          {/* Ma he thong rap */}
          <select
            value={maHeThongRap}
            onChange={(e) => setMaHeThongRap(e.target.value)}
            className={`p-3 focus:outline-none rounded-sm shadow-sm ${
              isLight ? "bg-white" : "bg-gray-800"
            }`}
            aria-expanded={true}
          >
            <option
              value={null}
              selected={maHeThongRap ? false : true}
              disabled
            >
              Chon He thong rap
            </option>
            {theaterList?.length > 0 && maPhim ? (
              theaterList.map((item, idx) => (
                <option value={item.maHeThongRap} key={idx}>
                  {item.tenHeThongRap}
                </option>
              ))
            ) : (
              <option value="null">Vui long chon phim</option>
            )}
          </select>

          {/* Cum rap theo ma rap */}

          <select
            value={cumRap}
            onChange={(e) => setCumRap(e.target.value)}
            className={`p-3 focus:outline-none rounded-sm shadow-sm ${
              isLight ? "bg-white" : "bg-gray-800"
            }`}
            aria-expanded={true}
          >
            <option value={null} selected={cumRap ? false : true} disabled>
              Chon Cum rap
            </option>
            {listOfCumRap?.length > 0 && maHeThongRap ? (
              listOfCumRap.map((item, idx) => (
                <option value={item.maCumRap} key={idx}>
                  {item.tenCumRap}
                </option>
              ))
            ) : (
              <option value="null">Vui long he thong rap</option>
            )}
          </select>

          {/* Rap */}

          <select
            value={rap}
            onChange={(e) => setRap(e.target.value)}
            className={`p-3 focus:outline-none rounded-sm shadow-sm ${
              isLight ? "bg-white" : "bg-gray-800"
            }`}
            aria-expanded={true}
          >
            <option value={null} selected={rap ? false : true} disabled>
              Chon Rap
            </option>
            {danhSachRap?.length > 0 && cumRap ? (
              danhSachRap.map((item, idx) => (
                <option value={item.maRap} key={idx}>
                  {item.tenRap}
                </option>
              ))
            ) : (
              <option value="null">Vui long chon cum rap</option>
            )}
          </select>

          {/* Gia ve */}

          <select
            onChange={(e) => setGiaVe(+e.target.value)}
            value={giaVe}
            className={`p-3 focus:outline-none rounded-sm shadow-sm ${
              isLight ? "bg-white" : "bg-gray-800"
            }`}
            aria-expanded={true}
          >
            <option selected disabled value="">
              Chon gia ve
            </option>
            <option value="75000">75000</option>
            <option value="100000">100000</option>
            <option value="120000">120000</option>
            <option value="150000">150000</option>
          </select>

          <div
            className={`p-3 shadow-sm ${
              isLight ? "bg-white" : "bg-gray-700"
            } rounded-sm`}
          >
            <TextField
              id="datetime-local"
              type="datetime-local"
              value={ngayChieuGioChieu}
              onChange={(e) => setNgayChieuGioChieu(e.target.value)}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className={`mt-5 bg-blue-600 px-3 py-2 text-white rounded-sm cursor-pointer focus:outline-none hover:bg-blue-500`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TicketPage;
