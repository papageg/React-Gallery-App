import React,{ Component } from 'react';
import logo from '../images/ggw.png';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor() {
        super();
        this.state = {
          query: '',
          general:[]
        }
    }

    componentDidMount() {
        this.generalSearch();
    }

    handleInputChange = (e) => {
        this.setState({
          query: e.target.value
        })
      }

      generalSearch = (query) => {
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.api}&tags=${this.state.query}&per_page=24&format=json&nojsoncallback=1`)
          .then(response => response.json())
          .then(responseData => {
            this.setState({ general: responseData.photos.photo });
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
      }

    render (props) {
        return (
            <header>
                <span className='ggw-logo'><img src={logo} alt="ggw logo"></img></span>
                
                <form>
                    <input
                        placeholder="Search for..."
                        ref={input => this.state.query = input}
                        onChange={this.handleInputChange}
                        onSubmit={this.generalSearch}
                        type="search"
                        ></input>
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