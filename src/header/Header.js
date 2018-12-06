import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';
import Menu from '../menu/Menu.js';
import LanguageSelector from '../languageselector/LanguageSelector.js';


class Header extends Component {
  render() {
    return (
      <div id="header">
        <img src={logo} className="header-logo" alt="logo" />
        <div id="logo-text">Cat Images</div>
        <LanguageSelector />
        <Menu />
      </div>
    );
  }
}

export default Header;
