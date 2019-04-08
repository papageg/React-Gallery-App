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

const api = apiKey;
const url = createBrowserHistory();

class App extends Component {

  constructor() {
    super();
    this.state = {
      hiking: [],
      soccer: [],
      food: [],
      search: []
    };
  }
  componentDidMount() {
    this.soccerSearch();
    this.hikingSearch();
    this.foodSearch();
    this.querySearch();
  }


  querySearch = (query) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
      .then(responseData => {
          this.setState({ 
            search: responseData.photos.photo
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
    console.log(this.state.search)
    return (
      <BrowserRouter>
        <div>
        <Header/>
        <Search url={url} onSearch={this.querySearch} image={this.state.search} query={this.state.query} />
          <Switch>
          {/* render={ () => <Gallery photos={this.state.general} title={'General'} */}
            <Route exact path="/" />
            <Route path="/soccer" render={ () => <Gallery photos={this.state.soccer} title={'Soccer'} />} /> 
            <Route path="/hiking" render={ () => <Gallery photos={this.state.hiking} title={'Hiking'} />} />
            <Route path="/food" render={ () => <Gallery photos={this.state.food} title={'Food'} />} />
            {/* <Route path={"/search/:id"} render={ () => <Gallery photos={this.state.search} title={'Search'} />} /> */}
            <Route component={NotFound}/>
          </Switch>
          <Footer />
          </div>
      </BrowserRouter>
   );
  }
}

export default App;
