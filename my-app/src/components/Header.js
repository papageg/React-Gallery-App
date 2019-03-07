import React from 'react';
import logo from '../images/ggw.png';

const Header = () => (
    <header>
        <title>React Gallery App</title>
        <span className='ggw-logo'><img src={logo} alt="ggw logo"></img></span>

        <nav></nav>
        {/* <search bar></search bar> */}
        <form>
            <input type="text" name="text"></input>
            <input type="submit" name="search"></input>
        </form>
        
    </header>
);

export default Header;