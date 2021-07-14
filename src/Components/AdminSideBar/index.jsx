import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

const AdminSideBar = () => {
  const history = useHistory();
  const sideBarList = [
    {
      title: "Dashboard",
      icon: "fas fa-border-all",
      location: "admin/dashboard",
      branch: [],
    },
    {
      title: "Phim",
      icon: "fas fa-video",
      location: "admin/movie",
      branch: ["phim"],
    },
    { title: "Hệ thống rạp", icon: "fas fa-home", branch: [] },
    { title: "Đặt vé", icon: "fas fa-shopping-cart", branch: [] },
    { title: "Thành viên", icon: "fas fa-users", branch: [] },
  ];
  const renderSideBarList = () => {
    return sideBarList.map((item, index) => (
      <NavLink to={`/${item.location}`} key={index}>
        <div
          className="flex items-center pl-3 pr-5 py-2 rounded-md hover:text-blue-400
        cursor-pointer transition-all"
        >
          <i className={`mr-2 ${item.icon}`}></i>
          {item.title}
        </div>
      </NavLink>
    ));
  };
  return (
    <div className="bg-white shadow fixed top-0 left-0 h-screen px-3 py-4">
      {renderSideBarList()}
    </div>
  );
};

export default AdminSideBar;
