import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/ggw.png";

class Header extends Component {


    render () {
      
        return (
            <div>  
                <span className='ggw-logo'><img src={logo} alt="ggw logo"></img></span>             
                <Link to="/"><button>Home</button></Link>
                <Link to="/soccer"><button>Soccer</button></Link>
                <Link to="/hiking"><button>Hiking</button></Link>
                <Link to="/food"><button>Food</button></Link>
            </div>
        )
    }
    
};
export default Header;