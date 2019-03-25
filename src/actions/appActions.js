import axios from 'axios';
import * as Constants from '../constants';

export const LOCATION_DATA = 'location_data';

export const doLocationData = () => {
    return dispatch => {
      let cities = [];
      axios.get('http://api.ipstack.com/check?access_key='+Constants.API_KEY)
      .then(
        (response) => {
          //console.log('User\'s Location Data is ', response);
          if(cities.indexOf() <= -1) {
            cities.push(response.data.city);
             dispatch({ type: "LOCATION_DATA", payload: { cities: cities }})
          }
        })
      .catch(
        (error) => {
          console.log(error);
        }
      );
    }
}
