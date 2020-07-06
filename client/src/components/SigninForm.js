import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/signInActions";
import history from "../history";
import Template from "./template";
import { Route, Redirect } from "react-router-dom";

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
    let promise = new Promise(function (resolve, reject) {
      resolve(history.push("/Home"));
    });
    promise.then(setTimeout(() => window.location.reload(), 1000));
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
        <h1 style={{ textAlign: "center", marginTop: "150px", color: "white"}}>Sign in</h1>
        <form onSubmit={this.onSubmit} style={{margin: "10px"}}>
          <fieldset
            style={{
              background: "#d1e0e0",
              border: "1px solid #CCC",
              padding: "20px",
              width: "500px",
              margin: "20px auto",
              color: "black",
              borderRadius:"25px"
            }}
          >
            <label>email</label>
            <br />
            <input
              spellcheck="false"
              name="email"
              type="text"
              onChange={this.onChange}
              value={this.state.email}
            />

            <br />

            <label>Password</label>
            <br />
            <input
              spellcheck="false"
              name="password"
              type="password"
              onChange={this.onChange}
              value={this.state.password}
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

SigninForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, { loginUser })(SigninForm);
