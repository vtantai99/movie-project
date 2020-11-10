import { Box, Grid } from "@material-ui/core";
import React from "react";
import "./index.scss";

const MovieDetailInfo = ({ movieDetail }) => {
  const { moTa } = movieDetail;
  return (
    <div className="movieDetailInfo container">
      <Box my={4}>
        <Grid container>
          <Grid item xs="12" sm="6">
            <div className="metaInfo">
              <span>Ngày công chiếu</span>
            </div>
            <div className="metaInfo">
              <span>Đạo diễn</span>
            </div>
            <div className="metaInfo">
              <span>Diễn viên</span>
            </div>
            <div className="metaInfo">
              <span>Thể loại</span>
            </div>
            <div className="metaInfo">
              <span>Định dạng</span>
            </div>
            <div className="metaInfo">
              <span>Ngôn ngữ</span>
            </div>
          </Grid>
          <Grid item xs="12" sm="6">
            <p>Nội dung</p>
            <span>{moTa}</span>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MovieDetailInfo;
