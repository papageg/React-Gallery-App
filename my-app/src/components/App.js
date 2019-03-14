import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import axios from 'axios';
// ${apiKey} to use apiKey in url link

import Header from './Header';
import Footer from './Footer';
import apiKey from "./Config.js";
import Home from './Home';
//import Soccer from './Soccer';
//import Hiking from './Hiking';
//import Food from './Food';
import NotFound from "./NotFound";
import Gallery from "./Gallery";

const api = apiKey;
//const flkrImages = [];

class App extends Component {

  constructor() {
    super();
    this.state = {
      photo: []
    };
  }

  componentDidMount() {
    this.generalSearch();
    this.soccerSearch();
    this.hikingSearch();
    this.foodSearch();
  }
  
  generalSearch = () => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=general&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ general: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  soccerSearch = () => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=soccer&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ soccer: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  hikingSearch = () => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=hiking&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ hiking: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  foodSearch = () => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=food&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ food: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  render() {
    console.log(this.state);
    return (
      
      <BrowserRouter>
        <div className="container">
        <Header />
          <Switch>
            <Route exact path="/" render={ () => <Gallery images={this.state.general} title={'General'} />} />
            <Route path="/soccer" render={ () => <Gallery images={this.state.soccer} title={'Soccer'} />} /> 
            <Route exact path="/hiking" render={ () => <Gallery images={this.state.hiking} title={'Hiking'} />} />
            <Route path="/food" render={ () => <Gallery images={this.state.food} title={'Food'} />} />
            <Route component={NotFound}/>
          </Switch> 
          {/* Pictures Here */}
          <Gallery photos={this.state.photo} />>
          <Footer />
        </div>
      </BrowserRouter>
   );
  }
}

export default App;
