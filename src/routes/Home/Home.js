import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { aboutToLeave } from '../../actions/appActions';

import Logo from '../../img/radio-logo.png';
import City from '../../components/City';
import { Prompt } from 'react-router'

class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      leave: true,
    }
  }

  componentWillUnmount = () => {
    console.log("here");
  }

  render() {
      return(
        <div className="container">
          <Prompt
            when={this.state.leave}
            message="Are you sure you want to leave?"
          />
    			<div className="background">
                <img src={Logo} className="img-responsive logo" alt="pedro garcia music producer" />
                <div className="col-md-4 col-md-offset-5"><iframe src="radio.html" title="player"></iframe></div>
                <div className="col-md-3"><City /></div>
        				<div className="clear"></div>
        				<div className="description">
        					Pedro Garcia is a music producer, songwriter, and mixing engineer. He played guitar for Britney Spears, and has produced albums with Finch, New Found Glory and Jay-Z.
        				</div>
      			</div>
          </div>
        );
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ aboutToLeave }, dispatch);
}

export default connect(mapDispatchToProps)(Home);
