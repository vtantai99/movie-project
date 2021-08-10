import React, { useState, useRef } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import SwitchTheme from "../SwitchTheme";
import swal from "sweetalert";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logOutUser } from "../../redux/action/userAction/actions";
const SettingPages = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let refOpen = useRef();

  const { user } = useSelector((state) => state.userReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  const [open, setOpen] = useState(false);

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

  const handleMovePage = () => {
    history.push("/info");
    setOpen(false);
  };

  const handleLogOut = () => {
    swal({
      title: "Bạn có thực sự muốn đăng xuất?",
      icon: "warning",
      buttons: {
        cancel: "Huỷ",
        confirm: "Đăng xuất",
      },
    }).then(async (willDelete) => {
      if (willDelete) {
        await dispatch(logOutUser());
        await localStorage.removeItem("user");
        await swal({
          title: "Đã đăng xuất",
          text: "Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!",
          icon: "success",
          timer: 800,
        });
        await history.push("/");
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
        className={`${
          !isLight && "bg-gray-800 text-white"
        } dropdown__list transition`}
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
            <li onClick={() => handleMovePage()}>
              <span>
                <i className="fas fa-info-circle"></i>
                Thông tin tài khoản
              </span>
            </li>
          )}
          <li>
            <span>
              <i className="fas fa-adjust"></i>
              Chế độ tối
            </span>
            <SwitchTheme />
          </li>
          {user?.maLoaiNguoiDung === "QuanTri" && (
            <li onClick={() => history.push("/admin/dashboard")}>
              <span>
                <i className="fas fa-user-cog"></i>
                Admin
              </span>
            </li>
          )}
          {user ? (
            <li onClick={() => handleLogOut()}>
              <span>
                <i className="fas fa-sign-out-alt"></i>
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
