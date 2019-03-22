import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {


    render () {
      
        return (
            
            <header>               
                <Link to="/"><button>Home</button></Link>
                <Link to="/soccer"><button>Soccer</button></Link>
                <Link to="/hiking"><button>Hiking</button></Link>
                <Link to="/food"><button>Food</button></Link>


            </header>
        )
    }
    
};
export default Header;