import React, { useState, Fragment, useEffect } from "react";
import swal from "sweetalert";
import {
  Button,
  FormGroup,
  FormHelperText,
  TextField,
  Grid,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import * as actions from "../../redux/action/userAction/actionTypes";
import axios from "axios";

const InfoUser = () => {
  const dispatch = useDispatch();
  const [formShow, setFormShow] = useState(false);
  const { info, user } = useSelector((state) => state.userReducer);

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
    console.log(infoUser, accessToken);
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

  const convertToPassWord = (string) => {
    let pass = "";
    for (let item of string) {
      pass += "*";
    }
    return pass;
  };

  return (
    <Fragment>
      <div className="card info__detail">
        <p className="info__detail__title">THÔNG TIN CÁ NHÂN</p>
        <div className="info__detail__item">
          <p>Họ tên</p>
          <strong>{info.hoTen}</strong>
        </div>
        <div className="info__detail__item">
          <p>Email</p>
          <strong>{info.email}</strong>
        </div>
        <div className="info__detail__item">
          <p>Số điện thoại</p>
          <strong>{info.soDT}</strong>
        </div>
        {formShow ? (
          <form
            className="info__detail__item"
            onSubmit={handleSubmit(onSubmit)}
          >
            <i className="fas fa-key mr-2"></i>
            Đổi mật khẩu
            <Grid container>
              <Grid item xs={12}>
                <FormGroup>
                  <TextField
                    name="newPass"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Mật khẩu"
                    inputRef={register({
                      required: "Xin vui lòng nhập thông tin",
                      pattern: {
                        value:
                          /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                        message:
                          "Mật khẩu bắt buộc bao gồm: Chữ viết hoa, chữ viết thường, số hoặc kí tự đặc biệt và phải ít nhất 8 kí tự. VD(Cute123@)",
                      },
                    })}
                    error={errors.newPass && true}
                  />
                  <FormHelperText error={errors.newPass && true}>
                    {errors.newPass && errors.newPass.message}
                  </FormHelperText>
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <TextField
                    name="newPass2"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Xác nhận mật khẩu"
                    inputRef={register({
                      required: "Xin vui lòng nhập thông tin",
                      validate: (value) =>
                        value === watch("newPass") || "Xác nhận mật khẩu sai",
                    })}
                    error={errors.newPass2 && true}
                  />
                  <FormHelperText error={errors.newPass2 && true}>
                    {errors.newPass2 && errors.newPass2.message}
                  </FormHelperText>
                </FormGroup>
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
