import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//
// ${apiKey} to use apiKey in url link





import Header from './Header';
import Footer from './Footer';
import apiKey from "./Config.js";
import Home from './Home';
import Soccer from './Soccer';
import Hiking from './Hiking';
import Food from './Food';
import NotFound from "./NotFound";

const api = apiKey;
//const flkrImages = [];

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/soccer" component={Soccer} /> 
            <Route exact path="/hiking" component={Hiking} />
            <Route path="/food" component={Food} />
            <Route component={NotFound}/>
          </Switch> 
          <Header />
          <Footer />
        </div>
      </BrowserRouter>
   );
  }
}

export default App;


{/* <Route exact path="/" component={Home} />
<Route path="/soccer" component={Soccer} />
<Route path="/hiking" component={Hiking} />
<Route path="/food" component={Food} /> */}