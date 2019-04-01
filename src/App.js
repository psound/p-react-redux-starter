import React, { Component } from 'react';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faTimes, faStroopwafel, faPencilAlt, faBell, faHammer } from '@fortawesome/free-solid-svg-icons';
import './css/App.css';


library.add(faSearch, faTimes, faStroopwafel, faPencilAlt, faBell, faHammer);

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
        activeMenu: 1,
    }
  }
  componentDidMount() {
     //console.log('App', this);

  }
  componentWillReceiveProps(nextProps) {
     // console.log('next Props App:', nextProps);
  }

  render() {
    return (
     <Router basenamme={'/'}>
      <div className="App">
        <Routes>
            {this.props.children}
        </Routes>
      </div>
    </Router>
    );
  }
}

export default App;
