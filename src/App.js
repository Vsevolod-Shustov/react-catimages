import React, { Component } from 'react';
import './App.css';
import Header from './header/Header.js';
import Main from './main/Main.js';
import Side from './side/Side.js';
import Footer from './footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="container">
          <Header />
          
          <Main />
          
          <Side />
          
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
