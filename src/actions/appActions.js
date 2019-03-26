import axios from 'axios';
import * as Constants from '../constants';

export const LOCATION_DATA = 'location_data';

export const doLocationData = () => {
  return dispatch => {
    let cities = [];
    let repeatedCityArr = [];
    //Get Active cities on the db.

    fetch("http://10.0.1.51:3001/api/getData")
    .then(data => data.json())
    .then(res => {
      //console.log("from db", res.data);
      res.data.map((citi) => {
        if(repeatedCityArr.indexOf(citi.city) <= -1) {
          console.log('aqui');
          cities.push(citi)
        }
        return repeatedCityArr.push(citi.city);
      })
    });

    axios.get('http://api.ipstack.com/check?access_key='+Constants.API_KEY)
    .then(
      (response) => {
        //console.log('Location Array Data is ', repeatedCityArr);
        console.log('indexOf', repeatedCityArr.indexOf(response.data.city));
        if(repeatedCityArr.indexOf(response.data.city) <= -1 ) {
          repeatedCityArr.push(response.data.city);
          console.log("here")
          // add cities to the db
          axios.post("http://10.0.1.51:3001/api/putData", {
            city: response.data.city,
            zip: response.data.zip,
            latitude: response.data.latitude,
            longitude: response.data.longitude,
            location: response.data.location,
          });
        }
        cities.map((cityCode) => {
          let numCitys = 0;
          repeatedCityArr.map((cityName) => {
            if(cityName.includes(cityCode.city)) {
              console.log(cityCode.city)
              numCitys ++;
            }
            return null;
          });
          console.log(numCitys);
          cityCode['activeUsers'] = numCitys;
          return null;
        });
        console.log("cities--->", cities);
        dispatch({ type: "LOCATION_DATA", payload: { cities: cities }});
      })
    .catch(
      (error) => {
        console.log(error);
      }
    );
  }
}
