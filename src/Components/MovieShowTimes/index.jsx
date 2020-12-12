import React, { useState } from "react";
import format from "date-format";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, Container, makeStyles } from "@material-ui/core";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  arrow: {
    cursor: "pointer",
  },
}));

const MovieShowTimes = ({ lichChieu }) => {
  const currentDate = new Date().getDate();
  const [show, setShow] = useState(false);
  const heThongRapReducer = useSelector((state) => state.heThongRapReducer);
  const classes = useStyles();
  const arr = lichChieu.map((el) => el.thongTinRap);
  const { rap } = heThongRapReducer;
  const history = useHistory();
  let lichChieuArr = lichChieu.filter(
    (el) => el.thongTinRap.maHeThongRap == rap
  );
  const timeLichChieu = lichChieuArr.map((el) =>
    new Date(el.ngayChieuGioChieu).getDate()
  );
  lichChieuArr = lichChieuArr?.filter(
    (el) => new Date(el.ngayChieuGioChieu).getDate() >= currentDate
  );
  console.log(timeLichChieu);
  const handleClick = (ma) => {
    console.log(ma);
    history.push(`/booking/${ma}`);
  };

  const renderCumRap = () => {
    const cumRapArr = lichChieuArr.map((el) => el.thongTinRap.tenCumRap);
    return cumRapArr.length > 0 ? (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        my={3}
      >
        <p>{cumRapArr[0]}</p>
        <span className={classes.arrow} onClick={() => setShow(!show)}>
          {show ? <ArrowDropUp /> : <ArrowDropDown />}
        </span>
      </Box>
    ) : (
      <Alert severity="error" variant="filled">
        Khong co lich chieu
      </Alert>
    );
  };

  return (
    <div className="movieShowTime">
      <Container>{renderCumRap()}</Container>
      {show ? (
        <div className="times">
          {lichChieuArr.map((el, idx) => (
            <div
              onClick={() => handleClick(el.maLichChieu)}
              key={idx}
              className="time"
            >
              <span className="timeNumber">
                {format("hh:mm", new Date(el.ngayChieuGioChieu))}
              </span>
              ~<span>{el.thoiLuong}</span>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieShowTimes;
