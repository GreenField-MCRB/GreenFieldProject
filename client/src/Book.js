import React from "react";
import Bookview from "./BookView";
import BookList from "./BookList";
import request from "superagent";
import axios from "axios";
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        this.setState({ books: [...data.body.items] });
      });
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  handleClick = (e) => {
    const books = {
      book: this.state.books,
    };
    axios.post("/", books).then((result) => {});
  };
  render() {
    return (
      <div className="booksearch">
        <Bookview searchBook={this.searchBook} searching={this.handleSearch} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}
export default Book;
