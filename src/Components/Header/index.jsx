import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [nav, setNav] = useState(false);
  //   const [nav, setNav] = useState(false);
  const handleShowNav = () => {
    setNav(true);
  };
  const handleHiddenNav = () => {
    setNav(false);
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
              <a href="#">Cụm rạp</a>
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
          <ul className="m-0">
            <li className="drop__login">
              <a href="#">
                <i className="fa fa-user-alt" />
                Đăng nhập
              </a>
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
              <a href="#">
                <i className="fa fa-user-plus" />
                Đăng kí
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
