import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div id="footer1">
          Powered by <a href="https://thecatapi.com/">TheCapAPI</a> and <a href="https://reactjs.org/">React</a>. Created by  <a href="https://github.com/Vsevolod-Shustov">Vsevolod Shustov</a>. View source code on <a href="https://github.com/Vsevolod-Shustov/react-catimages">github</a>.
        </div>
        
        <div id="footer2">
          right-hand footer area
        </div>
      </div>
    );
  }
}

export default Footer;
