import { processCategory } from '../pages/category';
import { processData } from '../pages/data';
import { menu } from './menu';

function apiCall(url, cb, obj) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.setRequestHeader('Authorization', localStorage.getItem('accessToken'));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const json = JSON.parse(xhr.responseText);
      cb(json);
    }
  };
  xhr.send();
}

// curry apiCall function for getting transaction list and handing over to data processing.
const getTransactionData = function (data) {
  const url = `https://api.monzo.com/transactions?account_id=${data.accounts[0].id}&expand[]=merchant`;
  apiCall(url, processData, data);
  // apiCall(url, processCategory, data);
};

const getTransactionTransport = function (data) {
  const url = `https://api.monzo.com/transactions?account_id=${data.accounts[0].id}&expand[]=merchant`;
  // apiCall(url, processData, data);
  apiCall(url, processCategory, data);
};

// curry apiCall function for getting account ID.
const accountIdData = function (data) {
  const url = 'https://api.monzo.com/accounts';
  apiCall(url, getTransactionData, data);
};

const accountIdTransport = function (data) {
  const url = 'https://api.monzo.com/accounts';
  apiCall(url, getTransactionTransport, data);
};

(function () {
  menu();
}());

window.accountIdData = accountIdData;
window.accountIdTransport = accountIdTransport;
