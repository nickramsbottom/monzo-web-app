import { lineChart } from './chart.config';
import { toggleMenu } from '../const';

function makeTable(data) {
  let rows = '<tr><th>Date</th><th>Merchant</th><th>Amount/£</th></tr>';
  for (let i = 0; i < data[0].length; i += 1) {
    rows += `<tr>
    <td>${data[0][i]}</td>
    <td>${data[1][i]}</td>
    <td>${data[2][i]}</td>
    </tr>`;
  }
  return rows;
}

function categoryIndividual(arr, cat) {
  const seen = [[], [], []];
  for (let i = 0; i < arr.length; i += 1) {
    const obj = arr[i];
    if (obj.category === cat && !obj.is_load && obj.amount !== 0) {
      const date = obj.created.split('T')[0];
      const amount = (obj.amount / 100).toFixed(2);
      const merchant = (obj.merchant.name);
      seen[0].push(date);
      seen[1].push(merchant);
      seen[2].push(-amount);
    }
  }
  for (let i = 0; i < seen[2].length; i += 1) {
    seen[2][i] = seen[2][i].toFixed(2);
  }
  return seen;
}

function categorySum(arr, cat) {
  const seen = [[], []];
  for (let i = 0; i < arr.length; i += 1) {
    const obj = arr[i];
    console.log(obj.category);
    if (obj.category === cat && !obj.is_load && obj.amount !== 0) {
      const date = obj.created.split('T')[0];
      const amount = (obj.amount / 100).toFixed(2);
// if you find the date in the array increment the running total
      if (seen[0].some(containsValueArr(date))) {
        const ind = seen[0].findIndex(element => element === date);
        seen[1][ind] -= amount;
// if you don't find the date in the array make an array element with the date and the first total
      } else {
        seen[0].push(date);
        seen[1].push(-amount);
      }
    }
  }
}

function processCategory(obj) {
  const table = document.getElementById('tableSummary');
  const fullData = categoryIndividual(obj.transactions, 'transport');
  const chartElt = document.getElementById('catLine');
  table.innerHTML = makeTable(fullData);
  lineChart(fullData[0], fullData[2], chartElt);
}

window.toggleMenu = toggleMenu;

export { processCategory };
