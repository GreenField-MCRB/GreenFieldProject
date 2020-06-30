import React from "react";
import axios from "axios";
import "./App.css";
class App extends React.Component {
  state = {
    title: "",
    author: "",
    description: "",
    books: [],
    search: "",
    book: [],
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };
  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
    };

    axios({
      url: "/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data sent to server");
        this.resetInput();
        this.getBooks();
      })
      .catch(() => {
        console.log("server error");
      });
  };
  resetInput = () => {
    this.setState({
      title: "",
      author: "",
      description: "",
    });
  };

  componentDidMount = () => {
    this.getBooks();
  };

  booksRender = (books) => {
    if (!books.length) {
      return null;
    } else {
      return books.map((books, index) => (
        <div key={index} className="bksR">
          <h2>{books.title}</h2>
          <h3>{books.author}</h3>
          <p>{books.description}</p>
          <br />
        </div>
      ));
    }
  };

  getBooks = () => {
    axios
      .get("/data")
      .then((response) => {
        const data = response.data;
        this.setState({ books: data });
        // console.log("data has been rendered");
      })
      .catch(() => {
        alert("data did not rendered ");
      });
  };

  searchs = (event) => {
    console.log(this.state.search);

    event.preventDefault();

    axios
      .get("/books/" + this.state.search)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        if (data.length) {
          this.setState({ book: data[0] });
        } else {
          this.setState({ book: [] });
        }
        // this.resetInput();
        // this.getOneBook();
      })
      .catch(() => {
        console.log("server error");
      });
  };

  bookRender = (book) => {
    return (
      <div className="bksR">
        <h2 id="tit">{book.title}</h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
        <br />
      </div>
    );
  };
  render() {
    console.log("States", this.state);
    //JSX
    return (
      <div className="container">
        <h1>Readers impressions </h1>
        <form>
          <div className="bks">
            <input
              spellcheck="false"
              type="text"
              placeholder="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <br />
            <input
              spellcheck="false"
              type="text"
              placeholder="author"
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </div>
          <div className="bks">
            <textarea
              spellcheck="false"
              name="description"
              placeholder="describe this book"
              cols="30"
              rows="10"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button onClick={this.submit}>Add a Book</button>
          <br />
          <br />
          <button id="btn" onClick={this.searchs}>
            Search for Book
          </button>
          <input
            spellcheck="false"
            id="imbtn"
            className="search"
            type="text"
            placeholder="search for a book"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>

        <div className="book">{this.bookRender(this.state.book)}</div>
        <br />
        <div>
          {/* <h2 id="im">Impressions</h2> */}
          <div>{this.booksRender(this.state.books)}</div>
        </div>
      </div>
    );
  }
}

export default App;
