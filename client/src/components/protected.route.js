import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "../store";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (store.getState().auth.isAuthenticated) {
          // if(auth.isAuthenticated){
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

// const ProtectedRoute = ({ component: Component, auth,...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         // if (store.getState().auth.isAuthenticated) {
//         if(auth.isAuthenticated){
//           return <Component {...props} />;
//         } else {
//           return (
//             <Redirect
//               to={{
//                 pathname: "/",
//                 state: {
//                   from: props.location,
//                 },
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// };

const mapSateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapSateToProps)(ProtectedRoute);
