import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
// ${apiKey} to use apiKey in url link

import Header from './Header';
import Footer from './Footer';
import apiKey from "./Config.js";
import Home from './Home';
import Soccer from './Soccer';
import Hiking from './Hiking';
import Food from './Food';
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

  //"https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&sort=relevance&per_page=24&format=json"
  componentDidMount() {
    axios.get()
      .then(res => {
        const photo = res.data;
        this.setState({ photo });
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/soccer" component={Soccer} /> 
            <Route exact path="/hiking" component={Hiking} />
            <Route path="/food" component={Food} />
            <Route component={NotFound}/>
          </Switch> 
          {/* Pictures Here */}
          <Gallery />
          <Footer />
        </div>
      </BrowserRouter>
   );
  }
}

export default App;
