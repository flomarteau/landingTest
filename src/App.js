import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Contact from './contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Header/>
        <Contact/>
        
      </div>
    );
  }
}

export default App;
