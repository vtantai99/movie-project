import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const InfoRoute = ({ component: InfoPage, ...rest }) => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (user) {
          return <InfoPage {...routeProps} />;
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

export default InfoRoute;
