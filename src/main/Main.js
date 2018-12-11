import React, { Component } from 'react';
import './Main.css';
import Image from '../image/Image.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.catimages_url = "https://api.thecatapi.com/v1/images/search?mime_types=jpg&limit=12";
    this.state = {
      images: []
    };
  }
  
  getImages(url) {
    fetch(url)
    .then(function(response){
      return response.json();
    })
    // .then(function(jsonData){
      // return JSON.stringify(jsonData);
    // })
    .then(json => {
      this.setState({ images: json });
      //console.log(json);
    });
  }
  
  render() {
    let images = this.state.images.map((image) => <Image url={image.url} />);
    return (
      <div id="main">
        {images}
      </div>
    );
  }
  
  componentDidMount() {
    this.getImages(this.catimages_url);
  }
}

export default Main;