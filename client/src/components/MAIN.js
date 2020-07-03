import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUser } from "../actions/userloadedActions";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>HELLO WORLD</h1>
      </div>
    );
  }
}

Main.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(Main);
