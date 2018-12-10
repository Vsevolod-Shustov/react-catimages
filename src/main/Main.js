import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import Image from '../image/Image.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.catimages_url = "https://api.thecatapi.com/v1/images/search?mime_types=jpg&limit=12";
    this.state = {
      images: [],
      networkStatus: true,
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
      console.log(json);
    });
  }
  
  networkStatus(array) {
    for(let image of array){
      if(!this.state.networkStatus){
        console.log("network state is bad, returning");
        return
      } else {
        console.log("fetching" + image.url);
        fetch(image.url)
        .then(function(response){
          if(!response.ok){
            this.setState({ networkStatus: false });
            console.log("network status set to flase because of" + image.url);
          }
        });
      }
    }
  }
  
  networkStatus2() {
    if(!this.state.networkStatus){
      console.log("network state is bad, returning");
      return
    } else {
      console.log("fetching...");
      fetch("https://66.media.tumblr.com/tumblr_krww7pEgmK1qa9hjso1_1280.jpg")
      .then(function(response){
        if(!response.ok){
          this.setState({ networkStatus: false });
          console.log("network status set to false");
        }
      })
      .catch(function(err){
        console.log("something went wrong");
        console.log(err);
      });
    }
  }
  
  render() {
    this.networkStatus2();
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