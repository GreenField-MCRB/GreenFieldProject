import React from "react";
import axios from "axios";
import "./messages.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogMessages: [],
    };
  }
  componentDidMount() {
    axios
      .get("/api/blog")
      .then((res) => {
        const result = res.data;

        this.setState({ blogMessages: result });
        console.log(this.state.blogMessages);
      })
      .catch(() => {
        console.log("error");
      });
  }
  render() {
    const msgs = this.state.blogMessages;
    return (
      <div>
        {msgs.map((message) => {
          return (
            <div>
              <h2>{message.username}</h2>
              <h3>{message.message}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Message;
