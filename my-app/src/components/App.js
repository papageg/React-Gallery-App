// Below are all my imports to render different aspects of the site
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Search from './Search';
import Header from './Header';
import Footer from './Footer';
import apiKey from "./Config";
import NotFound from "./NotFound";
import Gallery from "./Gallery";
import '../index.css';

// Below is my api which needs to be set up in the README of my github repo
  const api = apiKey;

//Url controlls the history of the url of the page so that it does not refresh when page is rendered but creates a history.  
  const url = createBrowserHistory({forceRefresh:false});

//Below is the class component holding the structure of the webpage
class App extends Component {

//The state holds all the information/images being generated from the api
  constructor() {
    super();
    this.state = {
      soccer: [],
      hiking: [],
      food: [],
      images: [],
      query: ''
    };
  }

//The component did mount is here to load when it renders one of the components 
  componentDidMount() {
    this.soccerSearch();
    this.hikingSearch();
    this.foodSearch();
    this.imageArray();
  }

//Below imageArray,foodSearch,hikingSearch,soccerSearch all will grab images from the api and generate 24 photos by changing the state and inputing the images
    imageArray = (query) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ images: responseData.photos.photo, query: query });
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

//Below is how to page will render and display on the screen
  render() {

    return (
      <BrowserRouter>
        <div>
        <Header/>
          <Switch>
            <Route exact path="/" render={ () =>
                <div>
                  <Search url={url} onSearch={this.imageArray} image={this.state.search} query={this.state.query}/>
                  <h2>{this.state.query} Images</h2>
                  <Gallery photos={this.state.images} title={'Searched'} />
                </div>
              } 
             />

            <Route path="/soccer" render={ () =>
                <div>
                  <h2>Soccer Photos</h2>
                  <Gallery photos={this.state.soccer} title={'Soccer'} />
                </div>
              }   
            /> 
            <Route path="/hiking" render={ () =>
              <div>
                <h2>Hiking Photos</h2>
                <Gallery photos={this.state.hiking} title={'Hiking'} />
              </div>
            } 

             />
            <Route path="/food" render={ () =>
              <div>
                <h2>Soccer Photos</h2>
                <Gallery photos={this.state.food} title={'Food'} />
              </div>
             } 

             />
            <Route component={NotFound}/>
          </Switch>
          <Footer />
          </div>
      </BrowserRouter>
   );
  }
}

export default App;