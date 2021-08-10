import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SwitchTheme from "../SwitchTheme";
import logo from "../../Assets/Images/logo.png";

const AdminHeader = () => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <div className="mb-4 flex flex-row justify-between items-center">
      <span className="text-2xl font-bold text-blue-500">
        ADMIN - {user.hoTen}
      </span>
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
