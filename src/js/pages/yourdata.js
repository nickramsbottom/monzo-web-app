import processData from '../functionality/data';
import { menu, toggleMenu } from '../functionality/menu';
import apiCall from '../functionality/api';

(function () {
  menu();
}());

// curry apiCall function for getting transaction list and handing over to data processing.
const getTransactionData = function (data) {
  const url = `https://api.monzo.com/transactions?account_id=${data.accounts[0].id}&expand[]=merchant`;
  apiCall(url, processData, data);
};

// curry apiCall function for getting account ID.
const accountIdData = function (data) {
  const url = 'https://api.monzo.com/accounts';
  apiCall(url, getTransactionData, data);
};

window.accountIdData = accountIdData;
window.toggleMenu = toggleMenu;
