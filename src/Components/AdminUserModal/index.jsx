import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { iconEyeOff, iconEye } from "../../Helper/IconSVG/iconAdmin";
import {
  changeModalUser,
  signUpRequest,
  updateUserRequest,
} from "../../redux/action/userAction/actions";

const AdminUserModal = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, setValue } = useForm({
    mode: "onTouched",
  });

  const { isLight } = useSelector((state) => state.themeReducer);
  const { modalUser, user } = useSelector((state) => state.userReducer);
  const { statusModal, infoUser } = modalUser;

  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    if (infoUser) {
      setValue("taiKhoan", infoUser.taiKhoan);
      setValue("matKhau", infoUser.matKhau);
      setValue("hoTen", infoUser.hoTen);
      setValue("email", infoUser.email);
      setValue("soDt", infoUser.soDt);
      setValue("maLoaiNguoiDung", infoUser.maLoaiNguoiDung);
    }
  }, [infoUser, setValue]);

  const handleOffModal = async () => {
    await setShowPass(false);
    await dispatch(changeModalUser({ statusModal: false }));
  };

  const onSubmit = (data) => {
    const infoUpdate = {
      taiKhoan: data.taiKhoan,
      matKhau: data.matKhau,
      email: data.email,
      soDt: data.soDt,
      maNhom: "GP09",
      maLoaiNguoiDung: data.maLoaiNguoiDung,
      hoTen: data.hoTen,
    };
    if (infoUser) {
      dispatch(updateUserRequest(user, infoUpdate));
    } else {
      dispatch(signUpRequest(infoUpdate, "addUser"));
    }
  };

  return (
    <Modal
      className={`${isLight ? "text-gray-600" : "text-white"}`}
      show={statusModal}
      size="md"
      centered
      onHide={() => handleOffModal()}
    >
      <Modal.Header
        className={`${!isLight && "bg-gray-700"} font-medium text-xl`}
        closeButton
      >
        {infoUser ? "C???P NH???T NG?????I D??NG" : "TH??M NG?????I D??NG"}
      </Modal.Header>
      <Modal.Body className={`${isLight ? "bg-gray-100" : "bg-gray-800"}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 flex flex-col">
              <label className="cursor-pointer  font-medium" htmlFor="taiKhoan">
                T??i kho???n
                {infoUser && (
                  <span className="text-red-500">
                    (*Th??ng tin n??y kh??ng th??? thay ?????i)
                  </span>
                )}
              </label>
              <input
                className={`${
                  !isLight && "bg-gray-700"
                } outline-none shadow-sm rounded-sm p-2`}
                id="taiKhoan"
                name="taiKhoan"
                readOnly={infoUser ? true : false}
                type="text"
                ref={register(
                  !infoUser && {
                    required: "Xin vui l??ng ??i???n th??ng tin",
                    minLength: {
                      value: 6,
                      message: "T??i kho???n ph???i tr??n 6 k?? t???",
                    },
                    maxLength: {
                      value: 10,
                      message: "T??i kho???n kh??ng ???????c qu?? 10 k?? t???",
                    },
                  }
                )}
              />
              <small className="text-red-500">
                {errors.taiKhoan && errors.taiKhoan.message}
              </small>
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="cursor-pointer font-medium" htmlFor="matKhau">
                M???t kh???u
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
                    required: "Xin vui l??ng ??i???n th??ng tin",
                    pattern: {
                      value:
                        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                      message:
                        "M???t kh???u b???t bu???c bao g???m: Ch??? vi???t hoa, ch??? vi???t th?????ng, s??? ho???c k?? t??? ?????c bi???t v?? ph???i ??t nh???t 8 k?? t???. VD(Cute123@)",
                    },
                  })}
                />
                <span
                  className="absolute right-2 cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? iconEye : iconEyeOff}
                </span>
              </div>
              <small className="text-red-500">
                {errors.matKhau && errors.matKhau.message}
              </small>
            </div>
            <div className="col-span-1 flex flex-col">
              <label className="cursor-pointer font-medium" htmlFor="hoTen">
                H??? t??n
              </label>
              <input
                className={`${
                  !isLight && "bg-gray-700"
                } outline-none shadow-sm rounded-sm p-2`}
                id="hoTen"
                name="hoTen"
                type="text"
                ref={register({
                  required: "Xin vui l??ng ??i???n th??ng tin",
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
                  required: "Xin vui l??ng ??i???n th??ng tin",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
                S??T
              </label>
              <input
                className={`${
                  !isLight && "bg-gray-700"
                } outline-none shadow-sm rounded-sm p-2`}
                id="soDt"
                name="soDt"
                type="text"
                ref={register({
                  required: "Xin vui l??ng ??i???n th??ng tin",
                  pattern: {
                    value: /^\d{10}$/,
                    message:
                      "S??? ??i???n tho???i kh??ng h???p l???, h??y ch???c ch???n b???n nh???p ????? 10 s???. VD(0987654321)",
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
                Th??nh vi??n
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
                {infoUser && <option value="QuanTri">QuanTri</option>}
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
                Hu??? b???
              </Button>
              <Button
                type="submit"
                style={{
                  background: "#007be8",
                  color: "#fff",
                }}
              >
                {infoUser ? "C???P NH???T" : "TH??M"}
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AdminUserModal;
