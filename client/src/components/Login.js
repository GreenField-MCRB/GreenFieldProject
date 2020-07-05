import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser } from "../actions/signUpActions";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import "./CSS/login.css";
class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top"
            id="mainNav"
          >
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <img src="assets/img/navbar-logo.svg" alt="" />
              </a>
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Menu
                <i className="fas fa-bars ml-1"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/Home">
                      Home
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="nav-link js-scroll-trigger"
                      href="#Discussions"
                    >
                      Discussions
                    </a>
                  </li> */}
                  {/* <li className="nav-item">
                    <a
                      className="nav-link js-scroll-trigger"
                      href="#Favourites"
                    >
                      Favourites
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/About">
                      About us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <SigninForm />
        <SignupForm />
      </div>
    );
  }
}

export default Login;
