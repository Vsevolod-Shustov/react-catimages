import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div id="main">
      main
      <img src={logo} className="main-loading" alt="now loading" />
      </div>
    );
  }
}

export default Main;
