import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { selectMovie } from "../../redux/action/movieAction/actions";

const AdminSideBar = ({ sideBarActive, setSideBarActive }) => {
  const [movieDropDown, setMovieDropDown] = useState(false);

  const themeReducer = useSelector((state) => state.themeReducer);
  const { isLight } = themeReducer;

  const dispatch = useDispatch();

  const sideBarList = [
    {
      title: "Dashboard",
      icon: "fas fa-border-all",
      location: "admin/dashboard",
      branch: [],
    },
    {
      title: "Hệ thống rạp",
      icon: "fas fa-home",
      branch: [],
      location: "admin/HeThongRap",
    },
    {
      title: "Đặt vé",
      icon: "fas fa-shopping-cart",
      branch: [],
      location: "admin/DatVe",
    },
    {
      title: "Thành viên",
      icon: "fas fa-users",
      branch: [],
      location: "admin/user",
    },
  ];

  const getIcon = (title) => {
    switch (title) {
      case "Hệ thống rạp":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        );
      case "Thành viên":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        );
      case "Đặt vé":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
            />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        );
    }
  };

  const renderSideBarList = () => {
    return sideBarList.map((item, index) => (
      <NavLink
        onClick={() => dispatch(selectMovie(null))}
        className={`flex flex-row items-center justify-${
          sideBarActive ? "start" : "center"
        } hover:no-underline hover:bg-blue-400 hover:text-white items-center p-3 rounded-md cursor-pointer transition-all`}
        to={`/${item.location}`}
        key={index}
        activeClassName="bg-blue-500 text-white hover:bg-blue-500"
      >
        {getIcon(item.title)}
        {sideBarActive && <span>{item.title}</span>}
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

      {/* MOVIE DROP DOWN */}

      <div>
        <div
          onClick={() => {
            setMovieDropDown(!movieDropDown);
            dispatch(selectMovie(null));
          }}
          className={`flex flex-${
            sideBarActive ? "row" : "col"
          } justify-between pl-3 pt-3 pr-3 pb-2 cursor-pointer items-center`}
        >
          <div className="flex flex-row justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
            {sideBarActive && <span>Movie</span>}
          </div>
          {/* Arrow */}
          <span>
            {movieDropDown ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </div>

        {/* DROP DOWN BLOCK */}

        <div
          className={`${
            movieDropDown ? "hidden" : "block"
          } transform transition-all ${sideBarActive && "ml-4"}`}
        >
          <NavLink
            onClick={() => dispatch(selectMovie(null))}
            className={`flex flex-row items-center justify-${
              sideBarActive ? "start" : "center"
            } hover:no-underline hover:bg-blue-500 hover:text-white items-center p-2 rounded-md cursor-pointer transition-all`}
            to={`/admin/addMovie`}
            activeClassName="bg-blue-500 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            {sideBarActive && <span>Add movie</span>}
          </NavLink>
          <NavLink
            onClick={() => dispatch(selectMovie(null))}
            className={`flex flex-row  items-center justify-${
              sideBarActive ? "start" : "center"
            } hover:no-underline hover:bg-blue-500 hover:text-white items-center p-2 rounded-md cursor-pointer transition-all`}
            to={`/admin/movieList`}
            activeClassName="bg-blue-500 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            {sideBarActive && <span>Movie list</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
