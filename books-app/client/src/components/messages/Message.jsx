import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./messages.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="replies">Charaf: yes</div>
      </div>
    );
  }
}

export default Message;
