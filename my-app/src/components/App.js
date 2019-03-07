import React, { Component } from 'react';


// import {
//   BrowserRouter,
//   // Route,
//   Switch
// } from 'react-router-dom';


import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Header />
        <Footer />
      </div>
   );
  }
}

export default App;
