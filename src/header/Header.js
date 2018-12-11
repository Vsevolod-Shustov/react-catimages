import React, { Component } from 'react';
import logo from './logo.svg';
import paw from './paw.svg';
import './Header.css';
import Menu from '../menu/Menu.js';


class Header extends Component {
  render() {
    return (
      <div id="header">
        <img src={paw} className="header-logo" alt="logo" />
        <div id="logo-text">Cat Images</div>
        <Menu />
      </div>
    );
  }
}

export default Header;
