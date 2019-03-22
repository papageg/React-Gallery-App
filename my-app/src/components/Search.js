import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from '../images/ggw.png';
import apiKey from "./Config";
import Gallery from "./Gallery";
const api = apiKey;

class Search extends Component {

 constructor() {
  super();
  this.state = {
    query: '',
    results: []
  };
}

componentDidMount() {
  this.getInfo();
}

 getInfo = () => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=car&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
        this.setState({ results: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

 render() {
  // console.log(this.state.query)
   return (
     
    <div>
        <span className='ggw-logo'><img src={logo} alt="ggw logo"></img></span>
        <form>
        <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
        />
        <Switch>
        <Route path=/${this.state.query} render={ () => <Gallery photos={this.state.results} title={this.state.query} />} />
        </Switch>
        </form>
     </div>
   );
 }
}

export default Search