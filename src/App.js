import React, { Component } from 'react';
import Routes from './pages';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line
import { fab } from '@fortawesome/free-brands-svg-icons'
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
        <Header></Header>
        <Routes>
            {this.props.children}
        </Routes>
      </div>
   </Router>
    );
  }
}

export default App;
