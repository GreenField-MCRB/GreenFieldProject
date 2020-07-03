import React from "react";
import Bookview from "./BookView";
import BookList from "./BookList";
import axios from "axios";
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      API_KEY: `AIzaSyCOFhfX0lDmkWfbXmyS9vXQVLuSEEVMaMg`,
      books: [],
      searchField: ""
    };
  }

  searchBook = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}:keyes&key=${this.state.API_KEY}&maxResults=1`
      )
      .then((data) => {
        this.setState({ books: [...data.data.items] });
      });
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  handleClick = (e) => {
    const books = {
      book: this.state.books
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
