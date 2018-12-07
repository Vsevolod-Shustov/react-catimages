import React, { Component } from 'react';
import transparent from './transparent.png';
import './Image.css';

class Image extends Component {
  render() {
    return (
      <div className="image" style={{
        backgroundImage: 'url(' + this.props.url + ')',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <img src={transparent} alt="" />
      </div>
    );
  }
}
export default Image;
