import { SIGN_IN } from "./types";
import React from "react";
import history from "../history";
import { Route, Redirect } from "react-router-dom";
export const loginUser = (postData) => (dispatch) => {
  fetch("/api/auth", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      // 'x-auth-token': localStorage.getItem('  ')
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: SIGN_IN,
        payload: post,
      })
    );
  //   .then(() => {
  //     return (
  //       <Route
  //         render={
  //            <Redirect to={{ pathname: "/Home" }} />

  //         }
  //       />
  //     );
  // })
};
