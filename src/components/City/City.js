import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { doLocationData, leavePage } from '../../actions/appActions';

//let jsonData = require('../../data/location.json');

class City extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
  
    }
  }

  componentDidMount = () => {
    this.props.doLocationData();
  }

  componentWillReceiveProps(nextProps) {
      console.log('next Props:', nextProps);
  }

    componentWillUnmount() {
      window.addEventListener('beforeunload', this.props.leavePage)
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
  return bindActionCreators({ doLocationData, leavePage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
