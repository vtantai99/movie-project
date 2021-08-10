import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SwitchTheme from "../SwitchTheme";
import logo from "../../Assets/Images/logo.png";

const AdminHeader = () => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <div className="mb-4 flex flex-row justify-between items-center">
      <img
        src="https://lh3.googleusercontent.com/proxy/xAfS9b-onOsVQxFl5vo7zRmdx02m70qRtMIlsmpbLmf5ZtrkCFYCog7YPuf7yd-eK3jkoUt5MGOz8TDRw0y9xBzPxw"
        className="w-36 h-16 rounded-sm"
        alt="admin"
      />
      <div className="flex flex-row justify-end items-center">
        <img
          src={`https://i.pravatar.cc/150?u=${user.taiKhoan}`}
          className="w-12 rounded-full"
          alt=""
        />
        <div className="ml-3">
          <SwitchTheme />
        </div>
        <NavLink className="ml-3" to="/">
          <img className="w-12" src={logo} alt="logo" />
        </NavLink>
      </div>
    </div>
  );
};

export default AdminHeader;
