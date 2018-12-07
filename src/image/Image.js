import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
  render() {
    return (
      <div class="image">
        <img src={this.props.url} />
      </div>
    );
  }
}
export default Image;
