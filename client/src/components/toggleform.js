import React, { Component } from "react";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";

class Toggleform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignup: true,
      count: 0,
      name: true,
    };
  }
  toggle() {
    this.setState((prevState) => ({ showSignup: !prevState.showSignup }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ name: !prevState.name }));
    console.log(this.state.showSignup);
  }
  render() {
    return (
      <div className="toggleform" key={this.state.count}>
        {this.state.showSignup ? <SigninForm /> : <SignupForm />}
        <br />
        <button onClick={this.toggle.bind(this)}>
          {this.state.name ? "signup" : "signin"}
        </button>
      </div>
    );
  }
}

export default Toggleform;
