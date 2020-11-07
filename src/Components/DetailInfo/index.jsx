import {
  Button,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  progress: {
    height: "200px",
    backgroundColor: "red",
  },
}));

const DetailInfo = ({ movieDetail }) => {
  const classes = useStyles();
  const {
    hinhAnh,
    ngayKhoiChieu,
    moTa,
    biDanh,
    tenPhim,
    maPhim,
    danhGia,
  } = movieDetail;
  console.log(hinhAnh);
  return (
    <div className="detail_info">
      <div
        style={{
          background: `url(${hinhAnh})`,
        }}
        className="detail_info_fog"
      >
        dssd
      </div>
      <div className="detail_info_content">
        <div className="detail_info_content_text">
          <img src={hinhAnh} alt="" />
          <div className="detail_info_content_text_info">
            <small>{ngayKhoiChieu}</small>
            <Typography variant="h3">{tenPhim}</Typography>
            <Button color="secondary" variant="contained">
              Mua ve
            </Button>
          </div>
        </div>
        <div className="detail_info_content_rating">
          <CircularProgress
            variant="static"
            value="50"
            className={classes.progress}
          ></CircularProgress>
          {danhGia}
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
