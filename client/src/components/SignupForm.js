import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser } from "../actions/signUpActions";
import NavigationBar from "./Header";
import Template from "./template";
class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      userName: "",
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
      fullName: this.state.fullName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.createUser(post);
    this.resetInput();
    //*************bad solution */
    ReactDOM.render(<Template />, document.getElementById("root"));
    //************************** */
  }
  resetInput = () => {
    this.setState({
      fullName: "",
      userName: "",
      email: "",
      password: "",
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", padding: "150px" }}>Sign up</h1>
        <form onSubmit={this.onSubmit}>
          <fieldset
            style={{
              background: "#FFF",
              border: "1px solid #CCC",
              padding: "20px",
              width: "500px",
              margin: "20px auto",
              color: "black",
            }}
          >
            <label>Fullname</label>
            <br />
            <input
              type="text"
              name="fullName"
              onChange={this.onChange}
              value={this.state.fullName}
            />

            <br />

            <label>Username</label>
            <br />
            <input
              name="userName"
              onChange={this.onChange}
              value={this.state.userName}
            />

            <br />

            <label>email</label>
            <br />
            <input
              name="email"
              type="text"
              onChange={this.onChange}
              value={this.state.email}
            />

            <br />

            <label>Password</label>
            <br />
            <input
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

SignupForm.propTypes = {
  createUser: PropTypes.func.isRequired,
};

export default connect(null, { createUser })(SignupForm);
