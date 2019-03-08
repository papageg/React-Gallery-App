import React from 'react';
import logo from '../images/ggw.png';

const Header = () => (
    <header>
        <span className='ggw-logo'><img src={logo} alt="ggw logo"></img></span>

        <form>
            <input type="text" name="text"></input>
            <input type="submit" name="search"></input>
        </form>

        <button>Home</button>
        <button>Soccer</button>
        <button>Hiking</button>
        <button>Food</button>

    </header>
);

export default Header;