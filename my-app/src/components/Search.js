import React, { Component } from 'react';
// import axios from 'axios';
// import Gallery from './Gallery'
// import apiKey from "./Config";
// import { Link } from 'react-router-dom';

// const api = apiKey;

class Search extends Component {

  constructor() {
    super();
    this.state = {
    searchText: ''
  }
}

  onSearchChange = e => {
    e.preventDefault();
    this.props.onSearch(e.target.value);
    // this.setState({ searchText: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
    // this.setState({ searchText: e.target.value })
    this.props.url.push(`/search/${this.state.searchText}`);
    // this.props.url.go();
    e.currentTarget.reset();
  }

  testSet = e => {
    this.setState({ searchText: e.target.value })
  }


  render() {
      return(
         <form className="search-form" onSubmit={this.handleSubmit} > 
              <input type="text"
                      name="name"
                      ref={(input) =>this.search = input}
                      placeholder="Search"
                      onChange={this.testSet}
                      />
            {/* <Link to={`/search/${this.state.searchText}`}> */}
               <button type="submit" value="Submit" className="search-button">
                <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </button>
             {/* </Link> */}
              {/* <Suggestions results={this.state.results} /> */}
              {/* <Route path={this.state.query} render={ () => <Gallery photos={this.state.peoples} title={'Search'} />} /> */}
              {/* <p>{this.state.searchText}</p> */}
         </form>   
    
 
   )
  }

}

/////////////////////////////////




export default Search;