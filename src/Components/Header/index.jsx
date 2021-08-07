import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import * as actions from "../../redux/action/userAction/actionTypes";
import swal from "sweetalert";
import { Avatar, Button } from "@material-ui/core";
import logo from "../../Assets/Images/logo.png";
import DropDown from "../DropDown";
import { scroller } from "react-scroll";
import { listHeader } from "../../Helper/DataFake/listHeader";
import SwitchTheme from "../SwitchTheme";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { user } = useSelector((state) => state.userReducer);
  const { isLight } = useSelector((state) => state.themeReducer);

  const [nav, setNav] = useState(false);

  useEffect(() => {
    getDataUser();
  }, []);

  const handleClickLink = (id, type) => {
    if (location.pathname === "/") {
      type === "mobile" && setNav(false);
      scroller.scrollTo(id, {
        duration: 100,
        smooth: "easeInOutQuart",
      });
    } else {
      type === "mobile" && setNav(false);
      history.push("/");
      setTimeout(() => {
        scroller.scrollTo(id, {
          duration: 100,
          smooth: "easeInOutQuart",
        });
      }, 0);
    }
  };

  //   Hàm lấy dữ liệu user sau khi logged
  const getDataUser = () => {
    const dataUser = localStorage.getItem("user");
    if (dataUser) {
      dispatch({
        type: actions.LOG_IN,
        payload: JSON.parse(dataUser),
      });
    }
  };

  // Hàm đăng xuất
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
        swal({
          title: "Đã đăng xuất",
          text: "Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!",
          icon: "success",
        });
        localStorage.removeItem("user");
        dispatch({
          type: actions.LOG_OUT,
          payload: null,
        });
        history.push("/");
      }
    });
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: `smooth` });
  };

  return (
    <header
      className={`${!isLight && "bg-gray-800 text-white"} header transition`}
    >
      <div className="header__navbar">
        <div className="header__navbar__logo" onClick={() => backToTop()}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="header__navbar__list">
          <ul>
            {listHeader.map((item, index) => (
              <li
                className="transition"
                key={index}
                onClick={() => handleClickLink(item.id, "desktop")}
              >
                {item.nameLink}
              </li>
            ))}
          </ul>
        </div>
        <div className="header__navbar__user">
          {user ? (
            <Fragment>
              <div className="user__logged">
                <div className="user__logged__img">
                  <Avatar
                    alt="Avatar"
                    src={`https://i.pravatar.cc/150?u=${user.taiKhoan}`}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                      width: "35px",
                      height: "35px",
                    }}
                  />
                </div>
                <span className="user__logged__name">{user.hoTen}</span>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="user__login">
                <NavLink to="/signIn">
                  <span>Đăng nhập</span>
                </NavLink>
              </div>
              <div className="user__signUp">
                <NavLink to="/signUp">
                  <span>Đăng kí</span>
                </NavLink>
              </div>
            </Fragment>
          )}
          <DropDown />
        </div>
        <label
          htmlFor="nav__input"
          className="header__navbar__icon-bar"
          onClick={() => setNav(true)}
        >
          <i className="fa fa-align-right"></i>
        </label>
        <input type="checkbox" hidden className="nav__input" id="nav__input" />
        <label
          onClick={() => setNav(false)}
          htmlFor="nav__input"
          className="header__navbar__overlay"
          style={nav ? { display: "block" } : { display: "none" }}
        ></label>
        <div
          className={`${
            !isLight && "bg-gray-800 text-white"
          } footer header__navbar__drop transition`}
          style={
            nav
              ? { transform: "translateX(0)", opacity: 1 }
              : { transform: "translateX(100%)" }
          }
        >
          <label
            htmlFor="nav__input"
            className="drop__cancel m-0"
            onClick={() => setNav(false)}
          >
            <i className="fa fa-times" />
          </label>
          <Fragment>
            <ul className="m-0">
              <li className="drop__login">
                {user ? (
                  <>
                    <Avatar
                      alt="Avatar"
                      src={`https://i.pravatar.cc/150?u=${user.taiKhoan}`}
                      style={{ marginRight: "5px" }}
                    />
                    {user.hoTen}
                  </>
                ) : (
                  <NavLink
                    to={{
                      pathname: "/signIn",
                      state: location.pathname,
                    }}
                  >
                    <i className="fa fa-user-alt" />
                    Đăng nhập
                  </NavLink>
                )}
              </li>
              <li className="darkMode">
                <div>
                  <i className="fas fa-adjust" />
                  Chế độ tối
                </div>
                <SwitchTheme />
              </li>
              <li>
                {user?.maLoaiNguoiDung === "QuanTri" && (
                  <NavLink to="/admin/dashboard">
                    <i className="fa fa-user-alt" />
                    Admin
                  </NavLink>
                )}
              </li>
              {user && (
                <li>
                  <NavLink to="/info" onClick={() => setNav(false)}>
                    <i className="fas fa-info-circle"></i>
                    Thông tin tài khoản
                  </NavLink>
                </li>
              )}
              {listHeader.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleClickLink(item.id, "mobile")}
                >
                  <i className={item.icon} />
                  {item.nameLink}
                </li>
              ))}
              <li className="drop__signUp">
                {user ? (
                  <Button
                    onClick={() => logOutUser()}
                    style={{
                      border: "1px solid #fa5238",
                      outline: "none",
                    }}
                  >
                    <i class="fa fa-sign-out-alt"></i>
                    Đăng xuất
                  </Button>
                ) : (
                  <NavLink to="/signUp">
                    <i className="fa fa-user-plus" />
                    Đăng kí
                  </NavLink>
                )}
              </li>
            </ul>
          </Fragment>
        </div>
      </div>
    </header>
  );
};

export default Header;
