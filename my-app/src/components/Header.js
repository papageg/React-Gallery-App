import React,{ Component } from 'react';
import logo from '../images/ggw.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    
    render () {
        return (
            <header>
                <span className='ggw-logo'><img src={logo} alt="ggw logo"></img></span>

                <form>
                    <input type="text" name="text"></input>
                    <input type="submit" name="search"></input>
                    
                </form>

                
                <Link to="/"><button>Home</button></Link>
                <Link to="/soccer"><button>Soccer</button></Link>
                <Link to="/hiking"><button>Hiking</button></Link>
                <Link to="/food"><button>Food</button></Link>

            </header>
        )
    }
    
};
export default Header;


class Home extends Component {    
    render() {
      return (
       <h2>Home Page</h2>
     )
   }
 };