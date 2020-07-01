import React from "react";
import "./App.css";
import Blog from "./components/Blogs/Blog";
import Message from "./components/messages/Message";

import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">BookVio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">My Library</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* <Blog /> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
