import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { callFood, rpsBooking } from "../../redux/action/bookingAction/actions";
import iconPrev from "../../Assets/Images/iconPrev.png";
import logo from "../../Assets/Images/logo.png";
import DropDown from "../DropDown";
const Header = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);
  const { isLight } = useSelector((state) => state.themeReducer);
  const { statusFood, statusRps } = useSelector(
    (state) => state.bookingReducer
  );

  return (
    <header className={`${!isLight && "bg-gray-800"} headerBooking transition`}>
      {statusRps ? (
        <div
          className="headerBooking__return"
          onClick={() =>
            statusFood
              ? dispatch(callFood(!statusFood))
              : dispatch(rpsBooking(false))
          }
        >
          <img src={iconPrev} alt="prev" style={{ cursor: "pointer" }} />
        </div>
      ) : (
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      )}
      <div className="headerBooking__status">
        <span className="tablet">
          {statusRps ? "02 THANH TOÁN" : "01 CHỌN GHẾ"}
        </span>
        <span className="desktop">CHỌN GHẾ &amp; THANH TOÁN</span>
      </div>
      <div className="headerBooking__user">
        <div className="headerBooking__user__img">
          <Avatar
            alt="Avatar"
            src={`https://i.pravatar.cc/150?u=${user?.taiKhoan}`}
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
        <span className="headerBooking__user__name">{user?.hoTen}</span>
        <DropDown />
      </div>
    </header>
  );
};

export default Header;
