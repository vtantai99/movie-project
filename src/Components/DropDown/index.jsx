import React, { useState, useRef } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import DarkMode from "../DarkMode";
import swal from "sweetalert";
import * as actions from "../../redux/action/userAction/actionTypes";
import { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
const SettingPages = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { darkMode } = useSelector((state) => state.commonReducer);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  let refOpen = useRef();
  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  };
  useOnClickOutside(refOpen, () => setOpen(false));
  const logOutUser = () => {
    swal({
      title: "Bạn có thực sự muốn đăng xuất?",
      icon: "warning",
      buttons: {
        cancel: "Huỷ",
        confirm: "Đăng xuất",
      },
    }).then((willDelete) => {
      if (willDelete) {
        dispatch({
          type: actions.LOG_OUT,
          payload: null,
        });
        localStorage.removeItem("user");
        swal({
          title: "Đã đăng xuất",
          text: "Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!",
          icon: "success",
          timer: 1000,
        });
        setTimeout(() => history.push("/"), 1000);
      }
    });
  };
  return (
    <div className="dropdown" ref={refOpen}>
      <Tooltip title="Cá nhân" placement="bottom">
        <div
          className="dropdown__select"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i
            className="fas fa-caret-down"
            style={
              open
                ? { transform: "rotate(-180deg)" }
                : { transform: "rotate(0deg)" }
            }
          />
        </div>
      </Tooltip>
      <div
        className={darkMode ? "dropdown__list Dark" : "dropdown__list"}
        style={
          open
            ? {
                opacity: 1,
                visibility: "visible",
                marginTop: "10px",
              }
            : {
                opacity: 0,
                visibility: "hidden",
              }
        }
      >
        <ul>
          {user && (
            <li onClick={() => history.push("/info")}>
              <span>
                <i className="fas fa-info-circle"></i>
                Thông tin tài khoản
              </span>
            </li>
          )}
          <li>
            <span>
              <i class="fas fa-adjust"></i>
              Chế độ tối
            </span>
            <DarkMode />
          </li>
          {user?.maLoaiNguoiDung === "QuanTri" && (
            <li onClick={() => history.push("/admin")}>
              <span>
                <i class="fas fa-user-cog"></i>
                Admin
              </span>
            </li>
          )}
          {user ? (
            <li onClick={() => logOutUser()}>
              <span>
                <i class="fas fa-sign-out-alt"></i>
                Đăng xuất
              </span>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(SettingPages);
