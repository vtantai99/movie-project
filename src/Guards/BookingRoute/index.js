import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const BookingRoute = ({ component: Booking, ...rest }) => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (user) {
          return <Booking {...routeProps} />;
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

export default BookingRoute;
