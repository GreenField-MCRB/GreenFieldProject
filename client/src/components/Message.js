import React from "react";
import axios from "axios";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogMessages: [],
      username: "",
      comment: "",
      flex: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      comment: e.target.value,
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
  async componentDidUpdate() {
    if (this.state.flex) {
      axios.get("/api/blog").then((res) => {
        const result = res.data;

        this.setState({ blogMessages: result });
        console.log(this.state.blogMessages);
      });
      await this.setState({ flex: !this.state.flex });
    }
  }
  async handleSubmit(e) {
    e.preventDefault();
    await axios.get("/api/users").then((res) => {
      const name = res.data[0].fullName;
      console.log(name);
      this.setState({ username: name });
      console.log(this.state.username);
    });
    axios
      .post("/api/blog", {
        // username: this.state.username,
        username: this.state.username,
        message: this.state.comment,
        book: this.props.book,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e.toJSON());
      });
    this.setState({ flex: !this.state.flex });
  }

  componentDidMount() {
    this.postmessages();
  }

  display = (blogMessages) => {
    if (!blogMessages.length) return null;

    return blogMessages.map((blogMessage) => (
      <div>
        <h3 style={{ color: "rgb(255, 102, 204)", fontSize: "40px" }}>
          {blogMessage.username}
        </h3>
        <p style={{ color: "#99ff99", fontSize: "30px" }}>
          {blogMessage.message}
        </p>
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
          <button id="btnn" type="button" onClick={this.handleSubmit.bind(this)}>
            Send
          </button>
        </form>
        <div className="msg">{this.display(this.state.blogMessages)}</div>
      </div>
    );
  }
}

export default Message;
