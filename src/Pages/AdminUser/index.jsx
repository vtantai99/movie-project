import { Button, Tooltip } from "@material-ui/core";
import Axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import Pagination from "../../Components/Pagination";
import QuantityTable from "../../Components/QuantityTable";
import { convertToPassWord } from "../../Helper/Function/convertPass";
import {
  deleteUser,
  getInfoUserByPage,
} from "../../redux/action/userAction/actions";

const AdminUser = () => {
  const dispatch = useDispatch();

  const { items, totalCount } = useSelector(
    (state) => state.userReducer.listInfo
  );
  const { user } = useSelector((state) => state.userReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  const [page, setPage] = useState(1);
  const [quantity, setQuantity] = useState(5);
  const [modalShow, setModalShow] = useState(false);
  const [modalAddUser, setModalAddUser] = useState(false);
  const [infoUser, setInfoUser] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [listUser, setListUser] = useState();

  const { register, handleSubmit, errors, setValue, watch } = useForm({
    mode: "onTouched",
  });

  useEffect(() => {
    dispatch(getInfoUserByPage(page, quantity));
    setListUser(items);
  }, [page, quantity]);

  useEffect(() => {
    if (infoUser) {
      setValue("taiKhoan", infoUser.taiKhoan);
      setValue("matKhau", infoUser.matKhau);
      setValue("hoTen", infoUser.hoTen);
      setValue("email", infoUser.email);
      setValue("soDt", infoUser.soDt);
      setValue("maLoaiNguoiDung", infoUser.maLoaiNguoiDung);
    }
  }, [infoUser]);

  const handleOffModal = () => {
    setModalShow(false);
    setInfoUser(null);
    setModalAddUser(false);
  };

  const handleChangePage = (page) => {
    setPage(page);
  };

  const handlePrevPage = () => {
    page > 1 && setPage(page - 1);
  };

  const handleNextPage = () => {
    page < Math.ceil(totalCount / quantity) && setPage(page + 1);
  };

  const handleChangeQuantity = (e) => {
    let { value } = e.target;
    setQuantity(value);
    setPage(1);
  };

  const handleDeleteUser = (taiKhoan) => {
    swal({
      title: "Bạn có thực sự muốn xoá người dùng này ?",
      icon: "info",
      buttons: {
        cancel: "Huỷ bỏ",
        confirm: "Đồng ý",
      },
    }).then((confirm) => {
      confirm && dispatch(deleteUser(user, taiKhoan, page, quantity));
    });
  };

  const handleAddUser = () => {
    setModalShow(true);
    setModalAddUser(true);
  };

  const handleUpdate = (user) => {
    setModalShow(true);
    setInfoUser(user);
    setShowPass(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    const infoUpdate = {
      taiKhoan: data.taiKhoan,
      matKhau: data.matKhau,
      email: data.email,
      soDt: data.soDt,
      maNhom: "GP09",
      maLoaiNguoiDung: data.maLoaiNguoiDung,
      hoTen: data.hoTen,
    };
    dispatch(updateInfoRequest(infoUpdate));
  };

  const sortListUser = () => {
    return items.sort(
      (a, b) =>
        a.hoTen.toLowerCase().charCodeAt(0) -
        b.hoTen.toLowerCase().charCodeAt(0)
    );
  };

  const updateInfoRequest = (infoUpdate) => async (dispatch) => {
    try {
      const res = await Axios({
        method: "PUT",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        data: infoUpdate,
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      if (res.status === 200 || res.status === 201) {
        swal({
          title: "Yeah",
          icon: "success",
          text: "Cập nhật thành công",
        }).then((confirm) => confirm && setModalShow(false));
        await dispatch(getInfoUserByPage(page, quantity));
      }
    } catch (err) {
      swal({
        title: err.response.data,
        icon: "error",
        button: true,
      });
    }
  };

  const renderListInfo = () => {
    return items?.map((item, index) => (
      <tr
        key={index}
        className={`${
          isLight
            ? "hover:bg-gray-50 border-solid"
            : "hover:bg-gray-700 border-gray-700"
        } border-b`}
      >
        <td className="px-6 py-4 text-left text-sm">{item.taiKhoan}</td>
        <td className="text-left text-sm">{item.hoTen}</td>
        <td className="text-left text-sm">{item.email}</td>
        <td className="text-left text-sm">{item.soDt}</td>
        <td className="text-left text-sm">{convertToPassWord(item.matKhau)}</td>
        <td className="text-left text-sm">{item.maLoaiNguoiDung}</td>
        <td>
          <Tooltip title="Cập nhật" placement="top-center">
            <button
              className="mr-2 text-green-500"
              onClick={() => {
                handleUpdate(item);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </Tooltip>
          <Tooltip title="Xoá người dùng" placement="top-center">
            <button
              className="text-red-500"
              onClick={() => {
                handleDeleteUser(item.taiKhoan);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </Tooltip>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h3 className="text-2xl uppercase">THÔNG TIN NGƯỜI DÙNG</h3>
      <div className="flex justify-between my-3">
        <div>Search</div>
        <Button
          onClick={() => handleAddUser()}
          style={{
            background: "#007be8",
            color: "#fff",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          THÊM NGƯỜI DÙNG
        </Button>
      </div>
      <div className={`${isLight ? "bg-white" : "bg-gray-800"} shadow-sm`}>
        <table className="w-full">
          <thead className={`${isLight ? "bg-gray-200" : "bg-gray-700"}`}>
            <tr>
              <th className="px-6 py-3 text-left text-sm">Tài khoản</th>
              <th className="text-left text-sm">
                <button onClick={() => sortListUser()}>Họ tên</button>
              </th>
              <th className="text-left text-sm">Email</th>
              <th className="text-left text-sm">Sđt</th>
              <th className="text-left text-sm">Mật khẩu</th>
              <th className="text-left text-sm">Phân loại người dùng</th>
              <th className="text-left text-sm">Chi tiết</th>
            </tr>
          </thead>
          <tbody>{renderListInfo()}</tbody>
        </table>
        <Modal
          className={`${isLight ? "text-gray-600" : "text-white"}`}
          show={modalShow}
          size="md"
          centered
          onHide={() => handleOffModal()}
        >
          <Modal.Header
            className={`${!isLight && "bg-gray-700"} font-medium text-xl`}
            closeButton
          >
            {modalAddUser ? "THÊM NGƯỜI DÙNG" : "CẬP NHẬT NGƯỜI DÙNG"}
          </Modal.Header>
          <Modal.Body className={`${isLight ? "bg-gray-100" : "bg-gray-800"}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 flex flex-col">
                  <label
                    className="cursor-pointer  font-medium"
                    htmlFor="taiKhoan"
                  >
                    Tài khoản
                    {!modalAddUser && (
                      <span className="text-red-500">
                        (*Thông tin này không thể thay đổi)
                      </span>
                    )}
                  </label>
                  <input
                    className={`${
                      !isLight && "bg-gray-700"
                    } outline-none shadow-sm rounded-sm p-2`}
                    id="taiKhoan"
                    name="taiKhoan"
                    readOnly={modalAddUser ? false : true}
                    type="text"
                    ref={register}
                  />
                  <small></small>
                </div>
                <div className="col-span-2 flex flex-col">
                  <label
                    className="cursor-pointer font-medium"
                    htmlFor="matKhau"
                  >
                    Mật khẩu
                  </label>
                  <div className="flex items-center relative">
                    <input
                      className={`${
                        !isLight && "bg-gray-700"
                      } w-100 outline-none shadow-sm rounded-sm p-2`}
                      id="matKhau"
                      name="matKhau"
                      type={showPass ? "text" : "password"}
                      ref={register({
                        required: "Xin vui lòng điền thông tin",
                        pattern: {
                          value:
                            /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                          message:
                            "Mật khẩu bắt buộc bao gồm: Chữ viết hoa, chữ viết thường, số hoặc kí tự đặc biệt và phải ít nhất 8 kí tự. VD(Cute123@)",
                        },
                      })}
                    />
                    <span
                      className="absolute right-2 cursor-pointer"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                  <small className="text-red-500">
                    {errors.matKhau && errors.matKhau.message}
                  </small>
                </div>
                <div className="col-span-1 flex flex-col">
                  <label className="cursor-pointer font-medium" htmlFor="hoTen">
                    Họ tên
                  </label>
                  <input
                    className={`${
                      !isLight && "bg-gray-700"
                    } outline-none shadow-sm rounded-sm p-2`}
                    id="hoTen"
                    name="hoTen"
                    type="text"
                    ref={register({
                      required: "Xin vui lòng điền thông tin",
                    })}
                  />
                  <small className="text-red-500">
                    {errors.hoTen && errors.hoTen.message}
                  </small>
                </div>
                <div className="col-span-1 flex flex-col">
                  <label className="cursor-pointer font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`${
                      !isLight && "bg-gray-700"
                    } outline-none shadow-sm rounded-sm p-2`}
                    id="email"
                    name="email"
                    type="email"
                    ref={register({
                      required: "Xin vui lòng điền thông tin",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Email, VD(user123@gmail.com)",
                      },
                    })}
                  />
                  <small className="text-red-500">
                    {errors.email && errors.email.message}
                  </small>
                </div>
                <div className="col-span-1 flex flex-col">
                  <label className="cursor-pointer font-medium" htmlFor="soDt">
                    SĐT
                  </label>
                  <input
                    className={`${
                      !isLight && "bg-gray-700"
                    } outline-none shadow-sm rounded-sm p-2`}
                    id="soDt"
                    name="soDt"
                    type="text"
                    ref={register({
                      required: "Xin vui lòng điền thông tin",
                      pattern: {
                        value: /^\d{10}$/,
                        message:
                          "Số điện thoại không hợp lệ, hãy chắc chắn bạn nhập đủ 10 số. VD(0987654321)",
                      },
                    })}
                  />
                  <small className="text-red-500">
                    {errors.soDt && errors.soDt.message}
                  </small>
                </div>
                <div className="col-span-1 flex flex-col">
                  <label
                    className="cursor-pointer font-medium"
                    htmlFor="maLoaiNguoiDung"
                  >
                    Phân loại người dùng
                  </label>
                  <select
                    className={`${
                      !isLight && "bg-gray-700"
                    } outline-none shadow-sm rounded-sm p-2`}
                    id="maLoaiNguoiDung"
                    name="maLoaiNguoiDung"
                    type="text"
                    ref={register}
                  >
                    <option value="QuanTri">QuanTri</option>
                    <option value="KhachHang">KhachHang</option>
                  </select>
                </div>
                <div className="col-span-2 flex justify-end">
                  <Button
                    onClick={() => handleOffModal()}
                    style={{
                      background: "#95a5a6",
                      color: "#fff",
                      marginRight: "10px",
                    }}
                  >
                    Huỷ bỏ
                  </Button>
                  <Button
                    type="submit"
                    style={{
                      background: "#007be8",
                      color: "#fff",
                    }}
                  >
                    Cập nhật
                  </Button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        <div className="flex justify-between items-center p-4">
          <QuantityTable
            totalCount={totalCount}
            quantity={quantity}
            handleChangeQuantity={handleChangeQuantity}
          />
          <Pagination
            page={page}
            quantity={quantity}
            totalCount={totalCount}
            handleChangePage={handleChangePage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
