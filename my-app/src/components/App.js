import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import apiKey from "./Config";
import NotFound from "./NotFound";
import Gallery from "./Gallery";

const api = apiKey;

class App extends Component {

  constructor() {
    super();
    this.state = {
      general: [],
      hiking: [],
      soccer: [],
      food: [],
      query: ''
    };
  }

  componentDidMount() {
    this.soccerSearch();
    this.hikingSearch();
    this.foodSearch();
    this.generalSearch();
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value 
      
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
}
  
  generalSearch = (query = this.state.query) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ 
          general: responseData.photos.photo,
          loading: false
         });
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
    console.log(this.state.query)
    return (
      
      <BrowserRouter>
        <div className="container">
        
        <Header api={api} generalSearch={this.generalSearch} query={this.state.query} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} input={this.input} general={this.state.general}/>
          <Switch>
          
          {/* render={ () => <Gallery photos={this.state.general} title={'General'} */}
            <Route exact path="/" />
            <Route path="/soccer" render={ () => <Gallery photos={this.state.soccer} title={'Soccer'} />} /> 
            <Route path="/hiking" render={ () => <Gallery photos={this.state.hiking} title={'Hiking'} />} />
            <Route path="/food" render={ () => <Gallery photos={this.state.food} title={'Food'} />} />
            <Route path={this.query} render={ () => <Gallery photos={this.state.query} title={this.query} />}  />
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
