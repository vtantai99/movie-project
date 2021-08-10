import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  iconDashBoard,
  iconMoviePage,
  iconTicketPage,
  iconUserPage,
} from "../../Helper/IconSVG/iconDashboard";

const AdminSideBar = ({ sideBarActive, setSideBarActive }) => {
  const { isLight } = useSelector((state) => state.themeReducer);

  const sideBarList = [
    {
      title: "Dashboard",
      icon: iconDashBoard,
      location: "admin/dashboard",
    },
    {
      title: "Quản lý phim",
      icon: iconMoviePage,
      location: "admin/movieList",
    },
    {
      title: "Quản lý thành viên",
      icon: iconUserPage,
      location: "admin/user",
    },

    {
      title: "Quản lý lịch chiếu",
      icon: iconTicketPage,
      location: "admin/ticket",
    },
  ];

  const renderSideBarList = () => {
    return sideBarList.map((item, index) => (
      <NavLink
        className={`flex flex-row items-center justify-${
          sideBarActive ? "start" : "center"
        } hover:no-underline hover:bg-blue-400 hover:text-white items-center 
        p-3 rounded-md cursor-pointer transition`}
        to={`/${item.location}`}
        key={index}
        activeClassName="bg-blue-500 text-white hover:bg-blue-500"
      >
        {item.icon}
        {sideBarActive && <span className="mr-2 text-bold">{item.title}</span>}
      </NavLink>
    ));
  };
  return (
    // MENU HAMBERGER
    <div
      className={`${sideBarActive ? "w-60" : "w-28"} ${
        isLight ? "bg-white" : "bg-gray-800"
      }  shadow fixed top-0 left-0 transition-all transform left-0 h-screen px-3 py-4`}
    >
      <div className="pb-3 pl-3">
        <span
          className="cursor-pointer"
          onClick={() => setSideBarActive(!sideBarActive)}
        >
          {sideBarActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </span>
      </div>
      {renderSideBarList()}
    </div>
  );
};

export default AdminSideBar;
