import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { doLocationData } from '../../actions/appActions';

//let jsonData = require('../../data/location.json');

class City extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {
    this.props.doLocationData();
  }

  render() {
    return(
      <div>
         {this.props.cities.map((city, c) => {
           return(
             <div className="city" key={c}>
               <div className="city-name">
                  <span>{city.city}</span> ({city.activeUsers})
               </div>
             </div>
           )
         })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cities: state.app.cities,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ doLocationData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
