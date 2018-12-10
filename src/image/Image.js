import React, { Component } from 'react';
import transparent from './transparent.png';
import './Image.css';
import paw from './paw.svg';

class Image extends Component {
  render() {
    return (
      <div classNmae="imagewrapper" style={{
          backgroundImage: 'url(' + paw + ')',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
        <div className="image" style={{
          backgroundImage: 'url(' + this.props.url + ')',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <img src={transparent} alt="" />
        </div>
      </div>
    );
  }
}
export default Image;
