import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import SwitchThemeAdmin from "../SwitchThemeAdmin";
const AdminHeader = () => {
  const history = useHistory();

  const themeReducer = useSelector((state) => state.themeReducer);
  const { isLight } = themeReducer;

  return (
    <div className="mb-10 flex flex-row justify-between items-center">
      <input
        type="text"
        placeholder="Search"
        className={`px-2 py-1 ${
          isLight ? "bg-white" : "bg-gray-800"
        } rounded-sm shadow-sm`}
      />
      <div className="flex flex-row justify-end items-center">
        <img
          src="https://cyberlearn-21.web.app/img/avatar.png"
          className="w-8"
          alt=""
        />
        <div className="ml-3">
          <SwitchThemeAdmin />
        </div>
        <NavLink className="ml-3" to="/">
          Back
        </NavLink>
      </div>
    </div>
  );
};

export default AdminHeader;
