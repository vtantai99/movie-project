import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { getMovieTrailer } from "../../redux/action/movieDetailAction/actions";

const useStyles = makeStyles((theme) => ({
  progress: {
    zIndex: 9999,
  },
  title: {
    margin: "10px 0",
  },
  btn: {
    backgroundColor: "#fb4226",
    color: "#fff",
  },
  playControl: {
    padding: "10px 12px",
    border: "2px solid #fff",
    borderRadius: "100%",
    cursor: "pointer",
  },
}));

const DetailInfo = ({ movieDetail }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const {
    hinhAnh,
    ngayKhoiChieu,
    moTa,
    biDanh,
    tenPhim,
    maPhim,
    danhGia,
    trailer,
  } = movieDetail;
  return (
    <div className="detail_info">
      <div
        style={{
          background: `url(${hinhAnh})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="detail_info_fog"
      >
        dssd
      </div>
      <div className="detail_info_content">
        <div className="detail_info_content_text">
          <div className="img_container">
            <img src={hinhAnh} alt="" />
            <div className="play_trailer_btn">
              <Box className={classes.playControl}>
                <PlayArrow
                  onClick={() => dispatch(getMovieTrailer(trailer))}
                  className={classes.arrow}
                ></PlayArrow>
              </Box>
            </div>
          </div>
          <div className="detail_info_content_text_info">
            <small>{ngayKhoiChieu}</small>
            <Typography className={classes.title} variant="h5">
              {tenPhim}
            </Typography>
            <Button className={classes.btn} size="large" variant="contained">
              Mua ve
            </Button>
          </div>
        </div>
        <div className="detail_info_content_rating">
          <CircularProgress
            variant="static"
            value={(danhGia * 100) / 10}
            className={classes.progress}
            size={150}
          ></CircularProgress>
          <div className="rating_border"></div>
          <Typography className="rating">{danhGia}</Typography>
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
