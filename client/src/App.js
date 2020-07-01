import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";

import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignup: true,
      count: 0,
    };
  }
  toggle() {
    this.state.showSignup = !this.state.showSignup;
    this.state.count++;
    console.log(this.state.showSignup);
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App" key={this.state.count}>
          {this.state.showSignup ? <SignupForm /> : <SigninForm />}
          <button onClick={this.toggle.bind(this)}>sign</button>
        </div>
      </Provider>
    );
  }
}

export default App;
