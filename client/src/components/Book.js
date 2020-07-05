import React from "react";
import Bookview from "./BookView";
import BookList from "./BookList";
import axios from "axios";
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ""
    };
  }

  searchBook = (e) => {
    e.preventDefault();
    console.log(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}:keyes&key=${process.env.REACT_APP_BOOK_API}&maxResults=10`
    );
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}:keyes&key=${process.env.REACT_APP_BOOK_API}&maxResults=1`
      )
      .then((data) => {
        this.setState({ books: [...data.data.items] });
      })
      .catch((e) => console.log(Object.entries(e)));
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  handleClick = (e) => {
    const books = {
      book: this.state.books
    };
    axios.post("/api/bookCollect", books).then((result) => {});
  };
  render() {
    return (
      <div className="booksearch">
        <Bookview searchBook={this.searchBook} searching={this.handleSearch} />
        <BookList books={this.state.books} ClickSearch={this.handleClick} />
      </div>
    );
  }
}
export default Book;
