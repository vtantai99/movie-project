import React from "react";
import format from "date-format";
import { nameSeat } from "../../Helper/Function/nameSeat";
import { formatNumber } from "../../Helper/Function/formatNumber";
import {
  renderImage,
  renderStyleColor,
} from "../../Helper/Function/customTheater";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
const ModalTicket = ({ modalData, showModal, handleOffModal }) => {
  const { isLight } = useSelector((state) => state.themeReducer);

  return (
    <Modal
      className={`${isLight ? "text-gray-600" : "text-white"}`}
      show={showModal}
      onHide={() => handleOffModal()}
      size="md"
      centered
    >
      <Modal.Header
        className={`${!isLight && "bg-gray-700"} font-bold text-xl`}
        closeButton
      >
        <Modal.Title>CHI TIẾT VÉ</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${isLight ? "bg-gray-100" : "bg-gray-800"}`}>
        <div className="p-4">
          <div className="flex items-center">
            <img
              className="w-24 h-24 rounded-md mr-2"
              src={renderImage(
                ...new Set(
                  modalData.danhSachGhe?.map((item) => item.maHeThongRap)
                )
              )}
              alt="theater"
            />
            <table className="w-full">
              <tbody
                className={`divide-y ${
                  isLight ? "divide-gray-300" : "divide-gray-700"
                }`}
              >
                <tr>
                  <td className="p-2 font-bold">Tên rạp:</td>
                  <td
                    className="p-2"
                    style={renderStyleColor(
                      ...new Set(
                        modalData.danhSachGhe?.map((item) => item.maHeThongRap)
                      )
                    )}
                  >
                    {[
                      ...new Set(
                        modalData.danhSachGhe?.map((item) => item.tenHeThongRap)
                      ),
                    ]}
                  </td>
                </tr>
                <tr>
                  <td className="p-2 font-bold">Rạp:</td>
                  <td className="p-2">
                    {[
                      ...new Set(
                        modalData.danhSachGhe?.map((item) => item.tenCumRap)
                      ),
                    ]}
                  </td>
                </tr>
                <tr>
                  <td className="p-2 font-bold">Ghế:</td>
                  <td className="p-2 text-red-500">
                    {modalData.danhSachGhe?.map((item, index) =>
                      index === 0
                        ? nameSeat(item.tenGhe)
                        : `, ${nameSeat(item.tenGhe)}`
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className={`${!isLight && "bg-gray-700"} my-2`}></hr>
          <table className="w-full">
            <tbody
              className={`divide-y ${
                isLight ? "divide-gray-300" : "divide-gray-700"
              }`}
            >
              <tr>
                <td className="p-2 font-bold">Mã vé:</td>
                <td className="p-2">{modalData.maVe}</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Tên phim:</td>
                <td className="p-2">{modalData.tenPhim}</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Giá vé:</td>
                <td className="p-2">{formatNumber(modalData.giaVe)}</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Thời gian đặt vé:</td>
                <td className="p-2">
                  {format("hh:mm:ss - dd/MM/yyyy", new Date(modalData.ngayDat))}
                </td>
              </tr>

              <tr>
                <td className="p-2 font-bold">Trạng thái:</td>
                <td className="p-2">
                  <span className="bg-green-500 text-white text-sm rounded p-2 ">
                    Thành công
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Tổng tiền:</td>
                <td className="p-2">
                  {formatNumber(
                    modalData.giaVe * modalData.danhSachGhe?.length
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalTicket;
