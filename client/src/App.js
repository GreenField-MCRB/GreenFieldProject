import React from "react";
import "./App.css";
import Book from "./Book";
import Header from "./Header";
// import Blog from "./components/Blogs/Blog";
// import Message from "./components/messages/Message";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Book />
      </div>
    );
  }
}

export default App;
