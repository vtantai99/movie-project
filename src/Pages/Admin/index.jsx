import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AdminSideBar from "../../Components/AdminSideBar";
import AdminDashBoard from "../../Components/AdminDashBoard";
import AdminMovie from "../../Components/AdminMovie";
import AddMovie from "../AddMovie";
import AdminHeader from "../../Components/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import AdminMovieList from "../AdminMovieList";
import { useEffect } from "react";
import { fetchMovieList } from "../../redux/action/movieAction/actions";

const Admin = () => {
  const themeReducer = useSelector((state) => state.themeReducer);
  const { isLight } = themeReducer;
  const [sideBarActive, setSideBarActive] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  return (
    <div
      className={`min-h-screen pb-10 w-screen ${
        isLight ? "bg-gray-100 text-gray-500" : "bg-gray-900 text-gray-200"
      }  pt-2 pr-10`}
    >
      <div className={`${sideBarActive ? "pl-60" : "pl-32"}`}>
        <AdminHeader />
        <AdminSideBar
          sideBarActive={sideBarActive}
          setSideBarActive={setSideBarActive}
        />
        <Route exact path="/admin/dashboard">
          <AdminDashBoard />
        </Route>
        <Route exact path="/admin/addMovie">
          <AddMovie />
        </Route>
        <Route exact path="/admin/movie">
          <AdminMovie />
        </Route>
        <Route exact path="/admin/movieList">
          <AdminMovieList />
        </Route>
        <Route exact path="/admin/">
          <Redirect to="/admin/dashboard"></Redirect>
        </Route>
      </div>
    </div>
  );
};

export default Admin;
