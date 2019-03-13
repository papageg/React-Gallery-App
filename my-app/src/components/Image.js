import React from 'react';
//import apiKey from "./Config.js";

//const api = apiKey;
// let eachLi = 0;

// for (let i = 0; i < eachLi; i++) {
//   eachLi.push(i)
//   console.log(i);
// }
const Image = () =>

  <li>
    <img src=`https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg`></img>
  </li>

export default Image;