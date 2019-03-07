import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// ${apiKey} to use apiKey in url link





import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import apiKey from "./Config.js";

const api = apiKey;
const flkrImages = [];

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Header />
          <Switch>
            <Route exact path="/" component={home}
            <Route path="/soccer" component={soccer}
            <Route path="/hiking" component={hiking}
            <Route path="/food" component={food}
          </Switch>
          <Nav />
          <Footer />
        </div>
      </BrowserRouter>
   );
  }
}

export default App;
