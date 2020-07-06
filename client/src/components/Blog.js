import React from "react";
// import axios from "axios";
import book from "./book.jpg";
import Button from "react-bootstrap/Button";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogMessages: [],
    };
  }
  componentDidMount() {}
  render() {
    const bookBlog = {
      width: "300px",
      height: "300px",
      margin: "0 auto",
      padding: "70px",
    };
    return (
      <div>
        <h1>Romeo And Juliet</h1>
        <img style={bookBlog} src={book} alt="" />
      </div>
    );
  }
}

export default Blog;
