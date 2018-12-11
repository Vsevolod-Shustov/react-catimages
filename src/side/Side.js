import React, { Component } from 'react';
import './Side.css';

class Side extends Component {
  render() {
    return (
      <div id="side">
        <div className="static_height_block">
          static<br /><br />
          height<br /><br />
          block
        </div>
      </div>
    );
  }
}

export default Side;
