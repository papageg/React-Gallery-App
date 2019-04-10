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
const url = createBrowserHistory({forceRefresh:false});

class App extends Component {

  constructor() {
    super();
    this.state = {
      soccer: [],
      hiking: [],
      food: [],
      images: []
    };
  }
  componentDidMount() {
    this.soccerSearch();
    this.hikingSearch();
    this.foodSearch();
  }

    imageArray = (query) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ images: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


//   querySearch = (query) => {
//     fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
//     .then(response => response.json())
//       .then(responseData => {
//           this.setState({ 
//             search: responseData.photos.photo
//           });
//       })
//       .catch(error => {
//           console.log('Error fetching and parsing data', error);
//       });
// }

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
        <div>
        <Header/>
        <Search url={url} onSearch={this.imageArray} image={this.state.search} query={this.state.query}/>
          <Switch>
            <Route exact path="/" />
            <Route path="/soccer" render={ () => <Gallery photos={this.state.soccer} title={'Soccer'} />} /> 
            <Route path="/hiking" render={ () => <Gallery photos={this.state.hiking} title={'Hiking'} />} />
            <Route path="/food" render={ () => <Gallery photos={this.state.food} title={'Food'} />} />
            <Route path="/search/:id" render={ () => <Gallery photos={this.state.images} title={'Search'} />} />
            <Route component={NotFound}/>
          </Switch>
          <Footer />
          </div>
      </BrowserRouter>
   );
  }
}

export default App;