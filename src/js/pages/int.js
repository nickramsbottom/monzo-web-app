import { clientData } from '../const';

// on the listing of functions in callbacks:
// https://stackoverflow.com/questions/4234619/how-to-avoid-long-nesting-of-asynchronous-functions-in-node-js
// refactoring this code and currying:
// https://stackoverflow.com/questions/43679300/pass-a-callback-function-with-some-arguments-already-set
/* eslint-disable */
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
/*eslint-enable */

/*
exchanges the authorisation code in the URL for an access token
which is set on the clientData object.
*/
function exchangeAuth() {
  const authCode = getParameterByName('code');
  const url = 'https://api.monzo.com/oauth2/token';
  const form = new FormData();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  form.append('grant_type', 'authorization_code');
  form.append('client_id', clientData.clientId);
  form.append('client_secret', clientData.clientSecret);
  form.append('redirect_uri', clientData.redirectURI);
  form.append('code', authCode);
  xhr.send(form);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const json = JSON.parse(xhr.responseText);
      localStorage.setItem('accessToken', `Bearer ${json.access_token}`);
      window.location.href = 'http://localhost:3000/yourdata.html';
    }
  };
}

window.exchangeAuth = exchangeAuth;
