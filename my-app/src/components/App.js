import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import axios from 'axios';
// ${apiKey} to use apiKey in url link

import Header from './Header';
import Footer from './Footer';
import apiKey from "./Config";
import Home from "./Home";
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
      //photos: [],
      general: [],
      hiking: [],
      soccer: [],
      food: [],
      query: ''
    };
  }

 ////////////////////////////////////
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
/////////////////////////////////////////

  componentDidMount() {
    this.generalSearch();
    this.soccerSearch();
    this.hikingSearch();
    this.foodSearch();
  }
  
  generalSearch = () => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${this.state.query}&per_page=24&format=json&nojsoncallback=1`)
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
    return (
      
      <BrowserRouter>
        <div className="container">
        
        <Header search={this.search} handleInput={this.handleInputChange} query={this.state.query} />
          <Switch>
          {/* render={ () => <Gallery photos={this.state.general} title={'General'} */}
            <Route exact path="/" />
            <Route path="/soccer" render={ () => <Gallery photos={this.state.soccer} title={'Soccer'} />} /> 
            <Route exact path="/hiking" render={ () => <Gallery photos={this.state.hiking} title={'Hiking'} />} />
            <Route path="/food" render={ () => <Gallery photos={this.state.food} title={'Food'} />} />
            <Route component={NotFound}/>
          </Switch> 
          {/* Pictures Here */}
          {/* <Gallery photos={this.state.photo} />> */}
          <Footer />
        </div>
      </BrowserRouter>
   );
  }
}

export default App;
