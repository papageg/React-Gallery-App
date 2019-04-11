import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/ggw.png";

//Header component holds the layout of when the header is displayed in App.js
class Header extends Component {

//Below is where to links are set up and Link is where the buttons url while be taken to
    render () {
      
        return (
            <div className="main-nav">  
            {/*  Below is GGW which is the logo for greg gordon web */}
                <span className='ggw-logo'><img src={logo} alt="ggw logo"></img></span>
                <ul>           
                <Link to="/"><li>Search</li></Link>
                <Link to="/soccer"><li>Soccer</li></Link>
                <Link to="/hiking"><li>Hiking</li></Link>
                <Link to="/food"><li>Food</li></Link>
                </ul>  
            </div>
        )
    }
    
};
export default Header;