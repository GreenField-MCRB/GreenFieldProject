import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser } from "../actions/signUpActions";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
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
      fullName: this.state.fullName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.createUser(post);
  }

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Fullname</label>
            <br />
            <input
              type="text"
              name="fullName"
              onChange={this.onChange}
              value={this.state.fullName}
            />
          </div>
          <br />
          <div>
            <label>Username</label>
            <br />
            <input
              name="userName"
              onChange={this.onChange}
              value={this.state.userName}
            />
          </div>
          <br />
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

SignupForm.propTypes = {
  createUser: PropTypes.func.isRequired,
};

export default connect(null, { createUser })(SignupForm);
