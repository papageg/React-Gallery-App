import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
      <nav className="main-nav">
        <ul className="main-nav">
          <li><NavLink to='/soccer'>Soccer</NavLink></li>
          <li><NavLink to='/hiking'>Hiking</NavLink></li>
          <li><NavLink to='/food'>Food</NavLink></li>
        </ul>
      </nav>
    )
  }

export default Nav;