//import axios from 'axios';


// Environments
export const DEV_ENV = "development";
export const NONPROD_ENV = "nonprod";
export const PROD_ENV = "prod";

// ENDPOINTS

let dataEndpoint = '';
let headerEndpoint = '';
let parametersEndpoint = '';
let urlEnv = '';
let thisTable


//Get the correct table from the URL

let path = window.location.href;
let pathArr = path.split('/');

if(pathArr[3].indexOf('#') <= -1) {
    thisTable = pathArr.slice(-1).pop();
} else {
    thisTable = pathArr[3].slice(0, -1);
}
console.log(thisTable);
let buildEndPoint = 'http://www-dev.corpnt.analog.com/cdp/pst/view/en/'+thisTable+'.js';





  /*if(process.env.NODE_ENV === 'development') {*/
      dataEndpoint = 'http://www-dev.corpnt.analog.com/cdp/pst/data/en/';
      headerEndpoint = buildEndPoint;
      parametersEndpoint = 'http://www-dev.corpnt.analog.com/cdp/pst/parametermapping.js';
      urlEnv = 'http://www-dev.corpnt.analog.com';
  /*} else {
      dataEndpoint = 'http://www.analog.com/cdp/pst/data/en/423.js';
      headerEndpoint = 'http://www.analog.com/cdp/pst/view/en/11156.js';
      parametersEndpoint = 'http://www.analog.com/cdp/pst/parametermapping.js';
      urlEnv = 'http://www.analog.com';
  }*/



export const ENDPOINT_DATA = dataEndpoint;
export const ENDPOINT_HEADER = headerEndpoint;
export const ENDPOINT_PARAMETERS = parametersEndpoint;
export const URL_ENV = urlEnv;

//console.log('runtime', process.env.NODE_ENV);
