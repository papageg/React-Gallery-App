import React from 'react';

const Image = (props) =>
  
  <li>
    <img src={`https://farm${props.farmId}.staticflickr.com/${props.serverId}/${props.id}_${props.secret}.jpg`} alt='rendering 24 images of search perams'></img>
  </li>

export default Image;