import React, { Component } from 'react';
import transparent from './transparent.png';
import './Image.css';
import paw from './paw.svg';

class Image extends Component {
  render() {
    return (
      <div className="imagewrapper" style={{
          backgroundImage: 'url(' + paw + ')',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}>
        <div className="image" style={{
          backgroundImage: 'url(' + this.props.url + ')',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <img src={transparent} alt="" />
        </div>
        <div className="magnifier">
          <a href={this.props.url} target="_blank"><i class="fas fa-search-plus"></i></a>
        </div>
      </div>
    );
  }
}
export default Image;
