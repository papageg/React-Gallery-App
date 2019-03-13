import React, { Component } from 'react';
import apiKey from "./Config.js";

const api = apiKey;

class Hiking extends Component {    

  componentDidMount() {
    this.hikingSearch();
  }
  
  hikingSearch = () => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=hiking&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ photo: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

   render() {
     return (
      <h2>Hiking Pictures</h2>
    )
  }
};

export default Hiking;