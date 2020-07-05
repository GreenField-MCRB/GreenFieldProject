import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Provider } from "react-redux";
import Toggleform from "./components/Toggleform";
import SignoutForm from "./components/SignoutForm";
import ProtectedRoute from "./components/protected.route";
import store from "./store";
import Template from "./components/template";
import Login from "./components/Login";
import history from "./history";

import { BrowserRouter, Route, Switch, Router } from "react-router-dom";

class App extends Component {
  // componentWillMount() {
  //   if (window.localStorage.token) {
  //     //update the authentication state of the store using the token that you have 
  //     // decrypt it and return the appropriate user and save it in redux
  //   }
  // }

  render() {
    return (
      <Provider store={store}>
        <div className="main">
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Home" component={Template} />
            </Switch>
          </Router>
          {/* <NavigationBar /> */}
          {/* <Template /> */}
          {/* <Route exact path="/Home" component={Template} /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
