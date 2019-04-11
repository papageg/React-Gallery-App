import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/ggw.png";

class Header extends Component {


    render () {
      
        return (
            <div className="main-nav">  
                <span className='ggw-logo'><img src={logo} alt="ggw logo"></img></span>
                <ul>           
                <Link to="/"><li>Search</li></Link>
                <Link to="/soccer"><li>Soccer</li></Link>
                <Link to="/hiking"><li>Hiking</li></Link>
                <Link to="/food"><li>Food</li></Link>
                {/* <Link to="/search"><li>Search</li></Link> */}
                </ul>  
            </div>
        )
    }
    
};
export default Header;