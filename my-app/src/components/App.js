import React, { Component } from 'react';

import {
  BrowserRouter,
  // Route,
  Switch
} from 'react-router-dom';


import Header from './Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          {/* <Route /> This will be for changing tabs/pages*/}
        </Switch>
      </BrowserRouter>
   );
  }
}

export default App;
