import React from 'react';

class OpedroPlayer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
      //console.log('Header', this);

  }

  componentWillReceiveProps(nextProps) {

      //console.log('next Props Header:', nextProps);
  }
  render() {
      return(
        <div className="opedro-radio">
			<div className="wrap-radio">
                <video src="http://radio.opedro.com:8002/" controls autoPlay></video>
            </div>
  		</div>
      );
    }
}

export default OpedroPlayer;
