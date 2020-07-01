import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';


import SignupForm from './components/SignupForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        
          <SignupForm />
          
        </div>
      </Provider>
    );
  }
}

export default App;
