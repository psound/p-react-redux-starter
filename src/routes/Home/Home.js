import React from 'react';
import Logo from '../../img/radio-logo.png';
import City from '../../components/City';

class Contact extends React.Component {

    constructor (props) {
      super(props);
      this.state = {

      }
    }

    componentDidMount() {
        //console.log('Home View Props', this.props);

    }

    componentWillReceiveProps(nextProps) {
        //console.log('next Props:', nextProps);
    }
  render() {
      return(
        <div className="container">
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

export default Contact;
