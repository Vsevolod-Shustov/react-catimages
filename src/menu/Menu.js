import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          "text": "Menu Item 1",
          "url": "http://example.com/"
        },
        {
          "text": "Menu Item 2",
          "url": "http://example.com/"
        },
        {
          "text": "Long Menu Item",
          "url": "http://example.com/"
        },
        {
          "text": "Menu Item 3",
          "url": "http://example.com/"
        },
        {
          "text": "Extra Long Menu Item",
          "url": "http://example.com/"
        },
        {
          "text": "Menu Item 4",
          "url": "http://example.com/"
        },
        {
          "text": "Human Staph What Are You Doing Long Menu Item",
          "url": "http://example.com/"
        },
        {
          "text": "Menu Item 5",
          "url": "http://example.com/"
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    document.getElementById('menu_items_wrapper').classList.toggle("menu_mobile_toggled_on");
  }
  
  render() {
    let menu = this.state.menuItems.map((item) => <a className="menu_item" href={item.url} target="_blank" rel="noopener noreferrer">{item.text}</a>);
    return (
      <div id="menu">
        <div id="menu_items_wrapper">
          {menu}
        </div>
        <div id="menu_toggle" onClick={this.handleClick}>
          Toggle Menu
        </div>
      </div>
    );
  }
}

export default Menu;
