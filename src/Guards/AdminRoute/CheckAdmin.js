import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import swal from "sweetalert";
import { logOutUser } from "../../redux/action/userAction/actions";

const CheckAdmin = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  console.log(location);

  useEffect(() => {
    swal({
      title: "Oops...!",
      text: "Tài khoản này không phải Quản trị viên",
      icon: "error",
      buttons: {
        cancel: "Về trang chủ",
        confirm: "Đăng nhập lại",
      },
    }).then(async (res) => {
      if (res) {
        await dispatch(logOutUser());
        localStorage.removeItem("user");
        history.push({
          pathname: "/signIn",
          state: location.pathname,
        });
      } else history.push("/");
    });
  }, [dispatch, history, location.pathname]);
  return <></>;
};

export default CheckAdmin;
