import { Modal } from "react-bootstrap";
import React from "react";
import { useSelector } from "react-redux";
import { renderStyleColor } from "../../Helper/Function/customTheater";
import { formatNumber } from "../../Helper/Function/formatNumber";
import format from "date-format";

const AdminTicketModal = ({ showModal, handleOffModal, infoTicket }) => {
  const { isLight } = useSelector((state) => state.themeReducer);

  return (
    infoTicket && (
      <Modal
        className={`${isLight ? "text-gray-600" : "text-white"}`}
        show={showModal}
        onHide={() => handleOffModal()}
        size="md"
        centered
      >
        <Modal.Header
          className={`${!isLight && "bg-gray-700"} font-medium text-xl`}
          closeButton
        >
          THÔNG TIN LỊCH CHIẾU
        </Modal.Header>
        <Modal.Body className={`${isLight ? "bg-gray-100" : "bg-gray-800"}`}>
          <div className="py-1 px-2">
            <div
              className={`${
                isLight ? "bg-white" : "bg-gray-900"
              } p-2 shadow-sm rounded-sm text-center font-bold`}
            >
              {infoTicket.tenPhim} -&nbsp;
              <span
                style={renderStyleColor(infoTicket.thongTinRap.maHeThongRap)}
              >
                {infoTicket.thongTinRap.tenHeThongRap}
              </span>
            </div>
            <table className="w-full">
              <tbody
                className={`divide-y ${
                  isLight ? "divide-gray-300" : "divide-gray-700"
                }`}
              >
                <tr>
                  <td className="p-2 font-bold">Mã lịch chiếu:</td>
                  <td className="p-2">{infoTicket.maLichChieu}</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold">Mã rạp:</td>
                  <td className="p-2">{infoTicket.maRap}</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold">Cụm rạp:</td>
                  <td className="p-2">{infoTicket.thongTinRap.tenCumRap}</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold">Rạp:</td>
                  <td className="p-2">{infoTicket.thongTinRap.tenRap}</td>
                </tr>{" "}
                <tr>
                  <td className="p-2 font-bold">Giá vé:</td>
                  <td className="p-2">{formatNumber(infoTicket.giaVe)}</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold">Ngày giờ chiếu:</td>
                  <td className="p-2">
                    {format(
                      "dd/MM/yyyy hh:mm",
                      new Date(infoTicket.ngayChieuGioChieu)
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    )
  );
};

export default AdminTicketModal;
