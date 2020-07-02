import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/signInActions";
import SigninForm from "./SigninForm";
import ReactDOM from "react-dom";

class SignoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggle() {
    ReactDOM.render(<SigninForm />, document.getElementById("root"));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle.bind(this)}>signout</button>
      </div>
    );
  }
}

// SigninUser.propTypes = {
//   loginUser: PropTypes.func.isRequired,
// };

export default connect(null, { loginUser })(SignoutForm);
