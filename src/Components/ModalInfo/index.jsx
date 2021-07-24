import React from "react";
import format from "date-format";
import { nameSeat } from "../../Helper/Function/nameSeat";
import { formatNumber } from "../../Helper/Function/formatNumber";
import {
  renderImage,
  renderStyleColor,
} from "../../Helper/Function/customTheater";
import { Modal } from "react-bootstrap";
const ModalInfo = ({ modalData, showModal, handleOffModal }) => {
  return (
    <Modal show={showModal} onHide={() => handleOffModal()} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title>Chi tiết vé</Modal.Title>
      </Modal.Header>
      <div className="p-4 text-gray-600 font-bold">
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
          <tbody>
            <tr>
              <td className="p-2 text-black">Tên rạp:</td>
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
              <td className="p-2 text-black">Rạp:</td>
              <td className="p-2">
                {[
                  ...new Set(
                    modalData.danhSachGhe?.map((item) => item.tenCumRap)
                  ),
                ]}
              </td>
            </tr>
            <tr>
              <td className="p-2 text-black">Ghế:</td>
              <td className="p-2 text-red-500">
                {modalData.danhSachGhe?.map((item, index) =>
                  index === 0
                    ? nameSeat(item.tenGhe)
                    : `, ${nameSeat(item.tenGhe)}`
                )}
              </td>
            </tr>
          </tbody>
        </div>
        <hr className="my-2" />
        <tbody>
          <tr>
            <td className="p-2 text-black">Mã vé:</td>
            <td className="p-2">{modalData.maVe}</td>
          </tr>
          <tr>
            <td className="p-2 text-black">Tên phim:</td>
            <td className="p-2">{modalData.tenPhim}</td>
          </tr>
          <tr>
            <td className="p-2 text-black">Giá vé:</td>
            <td className="p-2">{formatNumber(modalData.giaVe)}</td>
          </tr>
          <tr>
            <td className="p-2 text-black">Thời gian đặt vé:</td>
            <td className="p-2">
              {format("hh:mm:ss - dd/MM/yyyy", new Date(modalData.ngayDat))}
            </td>
          </tr>

          <tr>
            <td className="p-2 text-black">Trạng thái:</td>
            <td className="p-2">
              <span className="bg-green-500 text-white text-sm rounded p-2 ">
                Thành công
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-black">Tổng tiền:</td>
            <td className="p-2">
              {formatNumber(modalData.giaVe * modalData.danhSachGhe?.length)}
            </td>
          </tr>
        </tbody>
      </div>
    </Modal>
  );
};

export default ModalInfo;
