import React from 'react';

const Image = (props) =>
  
  <li>
    <img src={`https://farm${props.farmId}.staticflickr.com/${props.serverId}/${props.id}_${props.secret}.jpg`}></img>
  </li>

export default Image;