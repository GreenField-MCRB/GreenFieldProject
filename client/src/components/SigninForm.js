import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/signInActions";

class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(post);
    this.resetInput();
  }
  resetInput = () => {
    this.setState({
      email: "",
      password: "",
    });
  };
  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>email</label>
            <br />
            <input
              name="email"
              type="text"
              onChange={this.onChange}
              value={this.state.email}
            />
          </div>
          <br />
          <div>
            <label>Password</label>
            <br />
            <input
              name="password"
              type="password"
              onChange={this.onChange}
              value={this.state.password}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

SigninForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, { loginUser })(SigninForm);
