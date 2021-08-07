import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import SwitchTheme from "../SwitchTheme";
const AdminHeader = () => {
  const history = useHistory();

  const { isLight } = useSelector((state) => state.themeReducer);

  return (
    <div className="mb-3 flex flex-row justify-between items-center">
      <input
        type="text"
        placeholder="Search"
        className={`px-2 py-1 ${
          isLight ? "bg-white" : "bg-gray-800"
        } rounded-sm shadow-md`}
      />
      <div className="flex flex-row justify-end items-center">
        <img
          src="https://cyberlearn-21.web.app/img/avatar.png"
          className="w-8"
          alt=""
        />
        <div className="ml-3">
          <SwitchTheme />
        </div>
        <NavLink className="ml-3" to="/">
          Back
        </NavLink>
      </div>
    </div>
  );
};

export default AdminHeader;
