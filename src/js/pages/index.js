import { clientData } from '../const';

require('../../scss/app.scss');

const land = function () {
  const link = `https://auth.getmondo.co.uk/?client_id=${clientData.clientId}&redirect_uri=${clientData.redirectURI}&response_type=code`;
  const elem = document.getElementById('authorise');
  elem.setAttribute('href', link);
};

// https://stackoverflow.com/questions/35781579/basic-webpack-not-working-for-button-click-function-uncaught-reference-error

window.land = land;
