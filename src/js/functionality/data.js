import { pieChart, lineChart } from './chart.config';

/* eslint-disable no-param-reassign */
// outputs array of arrays
// come back and refactor
function containsValueArr(currentDate) {
  return function (element) {
    return element === currentDate;
  };
}

function totalDayArr(arr) {
  const seen = [[], []];
  for (let i = 0; i < arr.length; i += 1) {
    const obj = arr[i];
    if (!obj.is_load && obj.amount !== 0) {
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
  return seen;
}

function totalCatArr(arr) {
  const seen = [[], []];
  for (let i = 0; i < arr.length; i += 1) {
    const obj = arr[i];
    if (!obj.is_load && obj.amount !== 0) {
      const cat = obj.category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
      const amount = (obj.amount / 100); // .toFixed(2);
// if you find the date in the array increment the running total
      if (seen[0].some(containsValueArr(cat))) {
        const ind = seen[0].findIndex(element => element === cat);
        seen[1][ind] -= amount;
// if you don't find the date in the array make an array element with the date and the first total
      } else {
        seen[0].push(cat);
        seen[1].push(-amount);
      }
    }
  }
  for (let i = 0; i < seen[1].length; i += 1) {
    seen[1][i] = seen[1][i].toFixed(2);
  }
  return seen;
}

function processData(obj) {
  console.log('3');
//  const table = document.getElementById('tableSummary');
  const dayArray = totalDayArr(obj.transactions);
//  makeTable(null, table);
  const catArray = totalCatArr(obj.transactions);
  const lineCanvas = document.getElementById('line');
  lineChart(dayArray[0], dayArray[1], lineCanvas);
  pieChart(catArray);
}

export default processData;
