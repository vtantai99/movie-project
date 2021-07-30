import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AdminMovieList from "../AdminMovieList";
import AdminSideBar from "../../Components/AdminSideBar";
import AdminUser from "../AdminUser";
import AdminDashBoard from "../AdminDashBoard";
import AddMovie from "../AddMovie";
import AdminHeader from "../../Components/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchListUser } from "../../redux/action/adminAction/actions";
import { getMovieListRequest } from "../../redux/action/movieListAction/action";
import { GET_SHOWING_LIST } from "../../redux/action/movieListAction/actionTypes";
import { fetchTheaterListDetail } from "../../redux/action/heThongRapAction/actions";

const Admin = () => {
  const dispatch = useDispatch();
  const themeReducer = useSelector((state) => state.themeReducer);
  const { isLight } = themeReducer;
  const [sideBarActive, setSideBarActive] = useState(false);

  useEffect(() => {
    dispatch(fetchListUser());
    dispatch(getMovieListRequest("GP09", GET_SHOWING_LIST));
    dispatch(fetchTheaterListDetail());
  }, []);
  return (
    <div
      className={`min-h-screen w-screen ${
        isLight ? "bg-gray-100 text-gray-600" : "bg-gray-900 text-gray-100"
      }`}
    >
      <div className={`${sideBarActive ? "ml-60" : "ml-28"} p-4`}>
        <AdminHeader />
        <AdminSideBar
          sideBarActive={sideBarActive}
          setSideBarActive={setSideBarActive}
        />
        <Route exact path="/admin/dashboard" component={AdminDashBoard} />
        <Route exact path="/admin/user" component={AdminUser} />
        <Route exact path="/admin/addMovie" component={AddMovie} />
        <Route exact path="/admin/movieList" component={AdminMovieList} />
        <Route exact path="/admin/">
          <Redirect to="/admin/dashboard" />
        </Route>
      </div>
    </div>
  );
};

export default Admin;
