import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../../redux/action/userLoginAction/actionTypes";
import swal from "sweetalert";
import { Avatar, Button } from "@material-ui/core";

const Header = () => {
  // Navbar responsive
  const [nav, setNav] = useState(false);
  const handleShowNav = () => {
    setNav(true);
  };
  const handleHiddenNav = () => {
    setNav(false);
  };
  //   Hien thi ten nguoi dung
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.userLoginReducer.user);
  //   Hàm lấy dữ liệu user sau khi logged
  const getDataUser = () => {
    const dataUser = localStorage.getItem("user");
    if (dataUser) {
      dispatch({
        type: actions.LOGIN,
        payload: {
          isLogined: true,
          user: JSON.parse(dataUser),
        },
      });
    }
  };
  useEffect(() => {
    getDataUser();
  }, []);
  // Hàm đăng xuất
  const logOutUser = () => {
    swal({
      title: "Oops...",
      icon: "success",
      text: "Sign out Successful",
      timer: 1500,
      buttons: false,
    });
    localStorage.removeItem("user");
    dispatch({
      type: actions.LOGIN,
      payload: {
        isLogined: true,
        user: null,
      },
    });
  };

  return (
    <header className="header">
      <div className="header__navbar">
        <div className="header__navbar__logo">
          <NavLink to="/">
            <img src="https://tix.vn/app/assets/img/icons/web-logo.png" alt />
          </NavLink>
        </div>
        <div className="header__navbar__list">
          <ul className="m-0">
            <li>
              <a href="/#showTimes">Lịch chiếu</a>
            </li>
            <li>
              <a href="/#theaters">Cụm rạp</a>
            </li>
            <li>
              <a href="/#news">Tin tức</a>
            </li>
            <li>
              <a href="/#apps">Ứng dụng</a>
            </li>
          </ul>
        </div>
        <div className="header__navbar__user">
          {userLogged ? (
            <Fragment>
              <div className="user__logged">
                <span className="user__logged__name">{userLogged.hoTen}</span>
                <div className="user__logged__profile">
                  <div className="user__logged__profile--out">
                    <i class="fa fa-sign-out-alt"></i>
                  </div>
                  <a href="#/" className="user__logged__profile--link">
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
                  </a>
                  <div
                    className="user__logged__profile--btn"
                    onClick={logOutUser}
                  >
                    <i class="fa fa-sign-out-alt"></i>
                  </div>
                </div>
                {/* <div className="user__logged__setting">
                  <i class="fa fa-cog"></i>
                </div> */}
                {/* <button onClick={logOutUser}>
                  <i class="fa fa-sign-out-alt"></i>
                </button> */}
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="user__login">
                <NavLink to="/login">
                  <i className="fa fa-user-circle" />
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
          className="header__navbar__drop"
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
          {userLogged ? (
            <Fragment>
              <ul className="m-0">
                <li className="drop__login">
                  <a
                    href="#"
                    style={{ position: "relative", paddingLeft: "30px" }}
                  >
                    <Avatar
                      alt="Avatar"
                      src="https://cyberlearn-21.web.app/img/avatar.png"
                      style={{
                        position: "absolute",
                        left: "-10px",
                        top: "0",

                        width: "35px",
                        height: "35px",
                      }}
                    />
                    {userLogged.hoTen}
                  </a>
                </li>
                <li>
                  <a href="/#" onClick={handleHiddenNav}>
                    <i class="fa fa-history"></i>
                    Lịch sử mua vé
                  </a>
                </li>
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
                  <Button
                    onClick={logOutUser}
                    style={{
                      border: "1px solid #fa5238",
                      outline: "none",
                      color: "#666",
                    }}
                  >
                    <i class="fa fa-sign-out-alt"></i>
                    Đăng xuất
                  </Button>
                </li>
              </ul>
            </Fragment>
          ) : (
            <Fragment>
              <ul className="m-0">
                <li className="drop__login">
                  <NavLink to="/login">
                    <i className="fa fa-user-alt" />
                    Đăng nhập
                  </NavLink>
                </li>
                <li>
                  <a href="#showTimes" onClick={handleHiddenNav}>
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
                  <a href="#news" onClick={handleHiddenNav}>
                    <i className="fa fa-bell" />
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#apps" onClick={handleHiddenNav}>
                    <i className="fa fa-archive" />
                    Ứng dụng
                  </a>
                </li>
                <li className="drop__signUp">
                  <NavLink to="/signUp">
                    <i className="fa fa-user-plus" />
                    Đăng kí
                  </NavLink>
                </li>
              </ul>
            </Fragment>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
