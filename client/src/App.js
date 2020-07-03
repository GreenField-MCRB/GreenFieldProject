import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Provider } from "react-redux";
import Toggleform from "./components/Toggleform";
import SignoutForm from "./components/SignoutForm";

import store from "./store";


import Template from "./components/template";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="main">
          {/* <NavigationBar /> */}
          {/* <Template /> */}
          <Route exact path="/" component={Login} />
         
          <Route exact path="/Home" component={Template} />
        </div>
      </Provider>
    );
  }
}

export default App;
