import React, { Component } from 'react';
//The search component renders the search bar and button
class Search extends Component {

//The state here will hold the value of the search
  constructor() {
    super();
    this.state = {
    searchText: ''
  }
}

//onSearchChange will take the value of the search and send it to App.js to render 24 images
  onSearchChange = e => {
    e.preventDefault();
    this.props.onSearch(e.target.value);
  }

//handleSubmit hands the search when it is submitted and changes the url as well as resets the search bar so its ready to have a new word typed in
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
    this.props.url.push(`/search/${this.state.searchText}`);
    e.currentTarget.reset();
  }

//setSearch will grab the value of the search and change the states value to the inputed search
setSearch = e => {
    this.setState({ searchText: e.target.value })
  }

//Below is where everything is rendered to the page and the layout of how it will look
  render() {
      return(
         <form className="search-form" onSubmit={this.handleSubmit} > 
              <input type="text"
                      name="name"
                      ref={(input) =>this.search = input}
                      placeholder="Search"
                      onChange={this.setSearch}
                      />
               <button type="submit" value="Submit" className="search-button">
                <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </button>
         </form>   
    
 
   )
  }

}

export default Search;