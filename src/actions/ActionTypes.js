import axios from 'axios';
// eslint-disable-next-line
//import * as Constants from '../constants';

export const INITIAL_LOAD = 'initial_load';

export const initialLoad = (state) => {
    return dispatch => {
      const tokenData = {
        grant_type: 'authorization_code',
        client_id: '01a2d753-8447-4d5d-8f01-a0fd6b8bb237',
        client_secret: '/vvawEGvlEsKtmqnjsySuqu/hwJmgv4njI/TTyrpOJo=',
        scope: 'openid',
        response_mode: 'form_post',
        state: 12345
      };

      let USER_TOKEN ='';

      axios.get('https://login.microsoftonline.com//_api/SP.AppContextSite(@target)/web/sitegroups?@target=https://athenahealth.sharepoint.com/')
       .then(response => {
          console.log("Res", response.data);
          USER_TOKEN = response.data.access_token;
          //console.log('userresponse ' + response.data.access_token);
          const AuthStr = 'Bearer ' + USER_TOKEN;
          const config = {
            headers: { "content-type": "application/json;odata=verbose", "Authorization": AuthStr }
          };
          axios.get('https://athenahealth.sharepoint.com/_api/web/sitegroups(5)', config)
          .then(function (response) {
            console.log("actionTypes", response);
              dispatch({ type: "INITIAL_LOAD", payload: { data: response }});
          })
          .catch(function (error) {
                console.log(error);
          });
        })
       .catch((error) => {
          console.log('error ' + error);
       });

    }
}
