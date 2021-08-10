import React from "react";
import { useSelector } from "react-redux";
import { renderImageTheater } from "../../Helper/Function/customTheater";
import format from "date-format";
import { useState } from "react";
import { Fragment } from "react";
import AdminTicketModal from "../AdminTicketModal";

const AdminTicketTable = ({ maPhim }) => {
  const { isLight } = useSelector((state) => state.themeReducer);
  const { loadingTicketAdmin, movieDetail } = useSelector(
    (state) => state.movieDetailReducer
  );
  const { lichChieu } = movieDetail;

  const [infoTicket, setInfoTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const mapListCumRap = lichChieu?.map((item) => item.thongTinRap.tenCumRap);

  const listCumRap = mapListCumRap
    ?.filter((item, index) => mapListCumRap.indexOf(item) === index)
    .map((item) => {
      return { tenCumRap: item, listTime: [] };
    });

  if (lichChieu) {
    for (let i = 0; i < lichChieu.length; i++) {
      for (let j = 0; j < listCumRap.length; j++) {
        if (lichChieu[i].thongTinRap.tenCumRap === listCumRap[j].tenCumRap) {
          listCumRap[j].listTime.push(lichChieu[i]);
        }
      }
    }
  }

  listCumRap?.sort((a, b) => {
    if (a.tenCumRap > b.tenCumRap) return 1;
    else if (b.tenCumRap > a.tenCumRap) return -1;
    else return 0;
  });

  const handleOffModal = () => {
    setShowModal(false);
    setInfoTicket(null);
  };

  const handleOnModal = (e) => {
    let { value } = e.target;
    let arrValue = value.split(",");
    setInfoTicket(listCumRap[arrValue[0]].listTime[arrValue[1]]);
    setShowModal(true);
  };

  const renderTable = () => {
    return listCumRap?.map((item, index) => {
      return (
        <tr
          key={index}
          className={`${
            isLight
              ? "hover:bg-gray-50 border-solid"
              : "hover:bg-gray-700 border-gray-700"
          } border-b`}
        >
          <td className="px-6 py-3 text-left text-sm">{index + 1}</td>
          <td className="px-6 py-3 text-left text-sm">
            <img
              className="w-14 h-14"
              src={renderImageTheater(
                item.listTime[0].thongTinRap.maHeThongRap
              )}
              alt="theater"
            />
          </td>
          <td className="px-6 py-3 text-left text-sm">{item.tenCumRap}</td>
          <td className="px-6 py-3 text-left text-sm">
            <select
              className={`${
                isLight ? "bg-gray-200" : "bg-gray-900"
              } p-3 cursor-pointer outline-none w-100 rounded-md`}
              onChange={handleOnModal}
              value={infoTicket && infoTicket}
            >
              <option selected hidden>
                Xem lịch chiếu
              </option>
              {item.listTime.map((el, idx) => (
                <option key={idx} value={[index, idx]}>
                  {format("dd/MM/yyyy hh:mm", new Date(el.ngayChieuGioChieu))}
                </option>
              ))}
            </select>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className={`${isLight ? "bg-white" : "bg-gray-800"} shadow-sm w-full`}>
      <Fragment>
        {maPhim ? (
          <table className="w-full">
            <thead className={`${isLight ? "bg-gray-200" : "bg-gray-700"}`}>
              <tr>
                <th className="px-6 py-3 text-left text-sm cursor-pointer hover:bg-gray-400 transition">
                  STT
                </th>
                <th className="px-6 py-3 text-left text-sm cursor-pointer hover:bg-gray-400 transition">
                  Hệ thống rạp
                </th>
                <th className="px-6 py-3 text-left text-sm cursor-pointer hover:bg-gray-400 transition">
                  Cụm rạp
                </th>
                <th className="px-6 py-3 text-left text-sm cursor-pointer">
                  Ngày giờ chiếu
                </th>
              </tr>
            </thead>
            {loadingTicketAdmin ? (
              <div className="w-full p-3 font-2xl text-center">
                ...Đang tải dữ liệu phim
              </div>
            ) : (
              <tbody>{renderTable()}</tbody>
            )}
          </table>
        ) : (
          <div className="p-4 text-center rounded-sm shadow-sm font-medium text-lg">
            Vui lòng chọn phim để xem lịch chiếu
          </div>
        )}
        <AdminTicketModal
          infoTicket={infoTicket}
          showModal={showModal}
          handleOffModal={handleOffModal}
        />
      </Fragment>
    </div>
  );
};

export default AdminTicketTable;
