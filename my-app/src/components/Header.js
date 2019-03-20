import React,{ Component } from 'react';
import logo from '../images/ggw.png';
import { Link } from 'react-router-dom';

class Header extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //       query: '',
    //       general:[]
    //     }
    // }

    // componentDidMount(props) {
    //     this.props.generalSearch();
    // }

    // handleInputChange = (e) => {
    //     this.setState({
    //       query: e.target.value 
    //     })
    //   }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     e.currentTarget.reset();
    // }

    

    render (props) {
      
        return (
            
            <header>
                <span className='ggw-logo'><img src={logo} alt="ggw logo"></img></span>
                
                <form 
                  onSubmit={(e) => this.props.handleSubmit(e)}
                  ref={input => this.query = input}
                  onChange={this.props.handleInputChange}
                  
                >
                    <input
                        placeholder="Search for..."
                        type="search"
                        ></input>
                         <Link to={this.props.query} ><button>Search</button></Link> 
                </form>

                
                <Link to="/"><button>Home</button></Link>
                <Link to="/soccer"><button>Soccer</button></Link>
                <Link to="/hiking"><button>Hiking</button></Link>
                <Link to="/food"><button>Food</button></Link>
                <Link to={this.props.query}><button>{this.props.query}</button></Link>

            </header>
        )
    }
    
};
export default Header;