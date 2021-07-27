import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useHistory } from "react-router-dom";
import * as actions from "../../redux/action/userAction/actionTypes";
import swal from "sweetalert";
import { Avatar, Button } from "@material-ui/core";
import logo from "../../Assets/Images/logo.png";
import DarkMode from "../DarkMode";
import DropDown from "../DropDown";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleShowNav = () => {
    setNav(true);
  };
  const handleHiddenNav = () => {
    setNav(false);
  };
  //   Hien thi ten nguoi dung
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.userReducer);
  const { darkMode } = useSelector((state) => state.commonReducer);
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
  useEffect(() => {
    getDataUser();
  }, []);
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
    <header className="header" className={darkMode ? "header Dark" : "header"}>
      <div className="header__navbar">
        <div className="header__navbar__logo" onClick={() => backToTop()}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="header__navbar__list">
          <ul>
            <li>
              <NavLink to="/">Lịch chiếu</NavLink>
              {/* <a href="/#showTimes">Lịch chiếu</a> */}
            </li>
            <li>
              <NavLink to="/">Cụm rạp</NavLink>
              {/* <a href="/#theaters">Cụm rạp</a> */}
            </li>
            <li>
              <NavLink to="/">Tin tức</NavLink>
              {/* <a href="/#news">Tin tức</a> */}
            </li>
            <li>
              <NavLink to="/">Ứng dụng</NavLink>
              {/* <a href="/#apps">Ứng dụng</a> */}
            </li>
          </ul>
        </div>
        <div className="header__navbar__user">
          {user ? (
            <Fragment>
              <div className="user__logged">
                <div className="user__logged__img">
                  <Avatar
                    alt="Avatar"
                    src="https://cyberlearn-21.web.app/img/avatar.png"
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
                <NavLink to="/login">
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
          onClick={handleShowNav}
        >
          <i className="fa fa-align-right"></i>
        </label>
        <input type="checkbox" hidden className="nav__input" id="nav__input" />
        <label
          onClick={handleHiddenNav}
          htmlFor="nav__input"
          className="header__navbar__overlay"
          style={nav ? { display: "block" } : { display: "none" }}
        ></label>
        <div
          className={
            darkMode ? "header__navbar__drop Dark" : "header__navbar__drop"
          }
          style={
            nav
              ? { transform: "translateX(0)", opacity: 1 }
              : { transform: "translateX(100%)" }
          }
        >
          <label
            htmlFor="nav__input"
            className="drop__cancel m-0"
            onClick={handleHiddenNav}
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
                      src="https://cyberlearn-21.web.app/img/avatar.png"
                      style={{ marginRight: "5px" }}
                    />
                    {user.hoTen}
                  </>
                ) : (
                  <NavLink to="/login">
                    <i className="fa fa-user-alt" />
                    Đăng nhập
                  </NavLink>
                )}
              </li>
              <li className="darkMode">
                <a>
                  <i className="fas fa-adjust" />
                  Chế độ tối
                </a>
                <DarkMode />
              </li>
              <li>
                {user?.maLoaiNguoiDung === "QuanTri" && (
                  <NavLink to="/admin">
                    <i className="fa fa-user-alt" />
                    Admin
                  </NavLink>
                )}
              </li>
              {user && (
                <li>
                  <NavLink to="/info" onClick={handleHiddenNav}>
                    <i className="fas fa-info-circle"></i>
                    Thông tin tài khoản
                  </NavLink>
                </li>
              )}
              <li>
                <a href="/#showTimes" onClick={handleHiddenNav}>
                  <i className="fa fa-calendar-alt" />
                  Lịch chiếu
                </a>
              </li>
              <li>
                <a href="/#" onClick={handleHiddenNav}>
                  <i className="fa fa-location-arrow" />
                  Cụm rạp
                </a>
              </li>
              <li>
                <a href="/#news" onClick={handleHiddenNav}>
                  <i className="fa fa-bell" />
                  Tin tức
                </a>
              </li>
              <li>
                <a href="/#apps" onClick={handleHiddenNav}>
                  <i className="fa fa-archive" />
                  Ứng dụng
                </a>
              </li>
              <li className="drop__signUp">
                {user ? (
                  <Button
                    onClick={logOutUser}
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
