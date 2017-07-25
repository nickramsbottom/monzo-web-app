import processCategory from '../functionality/category';
import { menu, toggleMenu } from '../functionality/menu';
import apiCall from '../functionality/api';

(function () {
  menu();
}());

// curry apiCall function for getting transaction list and handing over to data processing.
const getTransactionTransport = function (data) {
  const url = `https://api.monzo.com/transactions?account_id=${data.accounts[0].id}&expand[]=merchant`;
  apiCall(url, processCategory, data);
};

// curry apiCall function for getting account ID.
const accountIdTransport = function (data) {
  const url = 'https://api.monzo.com/accounts';
  apiCall(url, getTransactionTransport, data);
};

window.accountIdTransport = accountIdTransport;
window.toggleMenu = toggleMenu;
