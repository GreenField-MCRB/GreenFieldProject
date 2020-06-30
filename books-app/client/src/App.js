import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/Blogs/Blog";
import Message from "./components/messages/Message";

function App() {
  return (
    <div className="App">
      <Blog />
      <Message />
    </div>
  );
}

export default App;
