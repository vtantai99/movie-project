import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import CheckAdmin from "./CheckAdmin";

const AdminRoute = ({ component: ComponentAdmin, ...rest }) => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (user) {
          if (user.maLoaiNguoiDung === "QuanTri") {
            return <ComponentAdmin {...routeProps} />;
          }
          return <CheckAdmin />;
        }
        return (
          <Redirect
            to={{
              pathname: "/signIn",
              state: routeProps.location.pathname,
            }}
          />
        );
      }}
    />
  );
};

export default AdminRoute;
