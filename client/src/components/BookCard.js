import React from "react";
import Message from "./Message";
import NavigationBar from "./Header";
import App from "../App";
import ReactDOM from "react-dom";
import discussionBG from "../img/background/bookie.jpg";
import axios from "axios";
import "../App.css";
class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: {},
      postedMessages: []
    };
  }
  ClickBack() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  clickHandler() {
    const styling = {
      backgroundImage: `url(${discussionBG})`,
      position: "fixed",
      top: 0,
      left: 0,
      minWidth: "100%",
      minHeight: "100%",
      color: "white",
      overflow: "auto"
    };
    // this.setState({ background: { backgroundImage: `url(${discussionBG})` } });
    ReactDOM.render(
      <div className="BooksRender" style={styling}>
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top"
            id="mainNav"
          >
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <img src="assets/img/navbar-logo.svg" alt="" />
              </a>
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Menu
                <i className="fas fa-bars ml-1"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item" display="none">
                    <a
                      className="nav-link js-scroll-trigger"
                      href="#Back"
                      onClick={this.ClickBack.bind(this)}
                    >
                      Back
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link js-scroll-trigger"
                      href="#BestSeller"
                    >
                      Best Seller
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link js-scroll-trigger"
                      href="#Discussions"
                    >
                      Discussions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link js-scroll-trigger"
                      href="#Favourites"
                    >
                      Favourites
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#Team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#SignOut">
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <BookCard className="bookImgBlog" book={this.props.book} />
        <Message book={this.props.book.volumeInfo.title} />
      </div>,
      document.getElementById("root")
    );
    // ReactDOM.render(
    //   <BookCard className="bookImgBlog" book={this.props.book} />,
    //   document.getElementById("root1")
    // );
    // ReactDOM.render(<Message />, document.getElementById("root2"));
    // ReactDOM.render(<Discussion />, document.getElementById("root3"));
  }
  render() {
    console.log(this.props.book);
    return (
      <div className="everything">
        <h1 id="bookTitle">{this.props.book.volumeInfo.title}</h1>
        <img
          src={this.props.book.volumeInfo.imageLinks.thumbnail}
          alt=""
          id="bookImg"
          onClick={this.clickHandler.bind(this)}
        />
        <h2>{this.props.book.volumeInfo.authors}</h2>
        <p>{this.props.book.volumeInfo.publishedDate}</p>
        <button type="submit" className="button">
          favourites
        </button>
      </div>
    );
  }
}
export default BookCard;
