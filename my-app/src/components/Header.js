import React,{ Component } from 'react';
import logo from '../images/ggw.png';
import App from "./App";
import { Link } from 'react-router-dom';

class Header extends Component {

    // state = {
    //     query: '',
    //   }

    // handleInputChange = () => {
    //     this.setState({
    //       query: this.search.value
    //     })
    //   }



    render (props) {
        console.log(this.state.query)
        return (
            <header>
                <span className='ggw-logo'><img src={logo} alt="ggw logo"></img></span>
                
                <form>
                    <input
                        placeholder="Search for..."
                        ref={input => props.search = input}
                        onChange={props.handleInputChange}
                        type="search"
                        ></input>
                    <Link to={props.query} ><button>Search</button></Link>       
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