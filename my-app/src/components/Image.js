import React from 'react';

//Image takes in all the information taken in by the props provided in Gallery.js and inputs them into the link to render the images
const Image = (props) =>
  
  <li>
    <img src={`https://farm${props.farmId}.staticflickr.com/${props.serverId}/${props.id}_${props.secret}.jpg`} alt='rendering 24 images of search perams'></img>
  </li>

export default Image;