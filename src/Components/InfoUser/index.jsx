import React, { useState, Fragment } from "react";
import swal from "sweetalert";
import {
  Button,
  FormHelperText,
  Grid,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/action/userAction/actionTypes";
import axios from "axios";
import { convertToPassWord } from "../../Helper/Function/convertPass";

const InfoUser = () => {
  const dispatch = useDispatch();
  const [formShow, setFormShow] = useState(false);
  const { info, user } = useSelector((state) => state.userReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const { register, errors, handleSubmit, watch } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    let { maLoaiNguoiDung, accessToken } = user;
    let { taiKhoan, matKhau, hoTen, email, soDT, maNhom } = info;
    let { newPass } = data;
    const infoUpdate = {
      taiKhoan,
      matKhau: newPass,
      email,
      soDt: soDT,
      maNhom,
      maLoaiNguoiDung,
      hoTen,
    };
    if (newPass === matKhau) {
      swal({
        title: "Oops!",
        icon: "error",
        text: "Mật khẩu mới trùng với mật khẩu hiện tại, vui lòng chọn mật khẩu khác",
      });
    } else {
      dispatch(changePassRequest(infoUpdate, accessToken));
    }
  };

  const changePassRequest = (infoUser, accessToken) => async (dispatch) => {
    try {
      const res = await axios({
        method: "PUT",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        data: infoUser,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 200 || res.status === 201) {
        await swal({
          title: "Yeah",
          icon: "success",
          text: "Đổi mật khẩu thành công",
        }).then((res) => setFormShow(false));

        await dispatch({
          type: actions.CHANGE_PASS,
          payload: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div
        className={`${
          !isLight && "bg-gray-800 text-white shadow-none"
        } card info__detail transition`}
      >
        <p className="info__detail__title">THÔNG TIN CÁ NHÂN</p>
        <div
          className={`${
            isLight ? "border-solid" : "border-gray-700"
          } info__detail__item border-b`}
        >
          <p>Họ tên</p>
          <strong>{info.hoTen}</strong>
        </div>
        <div
          className={`${
            isLight ? "border-solid" : "border-gray-700"
          } info__detail__item border-b`}
        >
          <p>Email</p>
          <strong>{info.email}</strong>
        </div>
        <div
          className={`${
            isLight ? "border-solid" : "border-gray-700"
          } info__detail__item border-b`}
        >
          <p>Số điện thoại</p>
          <strong>{info.soDT}</strong>
        </div>
        {formShow ? (
          <form
            className={`${
              isLight ? "border-solid" : "border-gray-700"
            } info__detail__item border-b`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <i className="fas fa-key mr-2"></i>
            Đổi mật khẩu
            <Grid container spacing={2} className="my-2">
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  error={errors.newPass && true}
                >
                  <InputLabel
                    className={`${!isLight && "text-white"}`}
                    htmlFor="newPass"
                  >
                    Mật khẩu mới
                  </InputLabel>
                  <OutlinedInput
                    id="newPass"
                    name="newPass"
                    type={showPass ? "text" : "password"}
                    inputRef={register({
                      required: "Xin vui lòng nhập thông tin",
                      pattern: {
                        value:
                          /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                        message:
                          "Mật khẩu bắt buộc bao gồm: Chữ viết hoa, chữ viết thường, số hoặc kí tự đặc biệt và phải ít nhất 8 kí tự. VD(Cute123@)",
                      },
                    })}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          className={`${!isLight && "text-white"}`}
                          onClick={() => setShowPass(!showPass)}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          {showPass ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={100}
                  />
                  <FormHelperText error={errors.newPass && true}>
                    {errors.newPass && errors.newPass.message}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  error={errors.newPass2 && true}
                >
                  <InputLabel
                    className={`${!isLight && "text-white"}`}
                    htmlFor="newPass2"
                  >
                    Xác nhận mật khẩu mới
                  </InputLabel>
                  <OutlinedInput
                    id="newPass2"
                    type={showPass2 ? "text" : "password"}
                    name="newPass2"
                    inputRef={register({
                      required: "Xin vui lòng nhập thông tin",
                      validate: (value) =>
                        value === watch("newPass") || "Xác nhận mật khẩu sai",
                    })}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          className={`${!isLight && "text-white"}`}
                          onMouseDown={() => setShowPass2(true)}
                          onMouseUp={() => setShowPass2(false)}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          {showPass2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={170}
                  />
                  <FormHelperText error={errors.newPass2 && true}>
                    {errors.newPass2 && errors.newPass2.message}
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              style={{
                background: "#007be8",
                color: "#fff",
                marginRight: "5px",
              }}
            >
              Lưu thay đổi
            </Button>
            <Button
              className="bg-blue-500"
              onClick={() => setFormShow(false)}
              type="submit"
              style={{
                background: "#95a5a6",
                color: "#fff",
              }}
            >
              Huỷ bỏ
            </Button>
          </form>
        ) : (
          <div className="info__detail__item passWord">
            <div>
              <p>Mật khẩu</p>
              <strong>{convertToPassWord(info?.matKhau)}</strong>
            </div>
            <Button className="bg-blue-500" onClick={() => setFormShow(true)}>
              Đổi mật khẩu
            </Button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default InfoUser;
