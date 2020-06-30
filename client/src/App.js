import React, { component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">hello</div>;
      </Provider>
    );
  }
}

export default App;
