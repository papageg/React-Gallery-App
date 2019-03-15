import React,{ Component } from 'react';
import logo from '../images/ggw.png';
import { Link } from 'react-router-dom';

class Header extends Component {

    state = {
        query: '',
      }

    handleInputChange = () => {
        this.setState({
          query: this.search.value
        })
      }

    render (props) {
        
        return (
            <header>
                <span className='ggw-logo'><img src={logo} alt="ggw logo"></img></span>

                <form>
                    <input
                        placeholder="Search for..."
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                        type="search"
                        ></input>
                        {/* <p>{this.state.query}</p> */}
                    {/* <input type="text" name="text"></input> */}
                    <Link to={this.state.query} ><button>Search</button></Link>       
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