import React from "react";
import axios from "axios";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogMessages: [],
      comment: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      comment: e.target.value
    });
  }

  postmessages() {
    axios
      .get("/api/blog")
      .then((res) => {
        const result = res.data;

        this.setState({ blogMessages: result });
        console.log(this.state.blogMessages);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const inp = {
      comment: this.state.comment
    };

    axios
      .post("/api/blog", {
        username: "charaf",
        message: this.state.comment,
        book: this.props.book
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e.toJSON());
      });
  }

  componentDidMount() {
    this.postmessages();
  }

  display = (blogMessages) => {
    if (!blogMessages.length) return null;

    return blogMessages.map((blogMessage) => (
      <div>
        <h3>{blogMessage.username}</h3>
        <p>{blogMessage.message}</p>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="comment"
            placeholder="Comment..."
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleSubmit.bind(this)}>
            Send
          </button>
        </form>
        <div className="msg">{this.display(this.state.blogMessages)}</div>
      </div>
    );
  }
}

export default Message;
