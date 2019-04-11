import React from 'react';

//If the page can not render an image this page will load to tell the user what went wrong
const NotFound = () => (
  <div className="main-content not-found">
    <h2>No Results Found</h2>
    <p>That search did not return any results, please try again.</p>
  </div>
);

export default NotFound;