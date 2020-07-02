import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Toggleform from "./components/toggleform";
import SignoutForm from "./components/SignoutForm";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="main">
          <Toggleform />
          {/* <SignoutForm/> */}
        </div>
      </Provider>
    );
  }
}

export default App;
