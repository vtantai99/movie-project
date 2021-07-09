import React from "react";
import { useSelector } from "react-redux";
import DetailDate from "../DetailDate";
import DetailTime from "../DetailTime";
import DetailTheater from "../DetailTheater";
import DetailMobileTheater from "../DetailMobileTheater";
const MovieDetailShowTime = () => {
  const { dateShow, codeTheater } = useSelector(
    (state) => state.movieDetailReducer
  );
  const { lichChieu } = useSelector(
    (state) => state.movieDetailReducer.movieDetail
  );
  const { darkMode } = useSelector((state) => state.commonReducer);
  return (
    <div className="container" role="tablist">
      <section className={darkMode ? "showTimes Dark" : "showTimes"} id="lich">
        <div className="showTimes__wrapper row m-0">
          <div className="col-3 p-0">
            <DetailTheater />
          </div>
          <div className="col-9 p-0">
            <DetailDate />
            <DetailTime
              dateShow={dateShow}
              codeTheater={codeTheater}
              lichChieu={lichChieu}
            />
          </div>
        </div>
        <div className="showTimes__wrapper__mobile row m-0">
          <div className="col-12 p-0">
            <DetailDate />
          </div>
          <div className="col-12 p-0">
            <DetailMobileTheater />
          </div>
        </div>
      </section>
    </div>
  );
};
export default MovieDetailShowTime;
