import React from 'react';

const Image = (props) =>

  <li>
    <img src={`https://farm${props.farm-id}.staticflickr.com/${props.server-id}/${props.id}_${props.secret}.jpg`}></img>
  </li>

export default Image;