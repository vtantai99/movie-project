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
  const { lichChieu, maNhom } = useSelector(
    (state) => state.movieDetailReducer.movieDetail
  );
  const { isLight } = useSelector((state) => state.themeReducer);

  return (
    <div className="container" role="tablist">
      {maNhom === "GP09" ? (
        <section
          className={`${
            !isLight && "bg-gray-800 text-white"
          } showTimes transition`}
          id="lich"
        >
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
      ) : (
        <p style={{ color: "#fff", textAlign: "center" }}>
          Phim này hiện tại chưa công chiếu
        </p>
      )}
    </div>
  );
};
export default MovieDetailShowTime;
