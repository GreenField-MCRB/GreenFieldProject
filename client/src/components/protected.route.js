import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "../store";

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        (props) =>
          auth ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
        
      }
    />
  );
};


export default PrivateRoute;
