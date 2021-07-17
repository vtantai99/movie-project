import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import format from "date-format";
import { useState } from "react";
import Pagination from "./Pagination";

const InfoTable = () => {
  const { info } = useSelector((state) => state.userReducer);

  const [page, setPage] = useState(1);
  const [postPerPage, setIPostPerPage] = useState(5);

  // Lấy số lượng item trên mỗi page
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = info.thongTinDatVe.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Thay đổi page
  const handleChangePage = (number) => {
    setPage(number);
  };

  const nameSeat = (stt) => {
    if (stt >= 145) {
      return `J${stt - 16 * 9}`;
    } else if (stt >= 129) {
      return `I${stt - 16 * 8}`;
    } else if (stt >= 113) {
      return `H${stt - 16 * 7}`;
    } else if (stt >= 97) {
      return `G${stt - 16 * 6}`;
    } else if (stt >= 81) {
      return `F${stt - 16 * 5}`;
    } else if (stt >= 65) {
      return `E${stt - 16 * 4}`;
    } else if (stt >= 49) {
      return `D${stt - 16 * 3}`;
    } else if (stt >= 33) {
      return `C${stt - 16 * 2}`;
    } else if (stt >= 17) {
      return `B${stt - 16}`;
    } else {
      return `A${stt}`;
    }
  };

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const renderListTicket = () => {
    return currentPost.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.tenPhim}</td>
          <td>{format("hh:mm:ss-dd/MM/yyyy", new Date(item.ngayDat))}</td>
          <td>{item.maVe}</td>
          <td>
            {item.danhSachGhe.map((item, index) =>
              index === 0 ? nameSeat(item.tenGhe) : `,${nameSeat(item.tenGhe)}`
            )}
          </td>
          <td>{formatNumber(item.giaVe * item.danhSachGhe.length)}</td>
        </tr>
      );
    });
  };
  return (
    <Fragment>
      <div className="card info__history">
        <p className="info__history__title">LỊCH SỬ ĐẶT VÉ</p>
        <div className="info__history__table">
          <table>
            <thead>
              <tr>
                <th>Tên phim</th>
                <th>Ngày đặt vé</th>
                <th>Mã vé</th>
                <th>Ghế</th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>{renderListTicket()}</tbody>
          </table>
          {info.thongTinDatVe.length > 5 ? (
            <Pagination
              page={page}
              postPerPage={postPerPage}
              totalPost={info.thongTinDatVe.length}
              handleChangePage={handleChangePage}
            />
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default InfoTable;
