import { colors } from '../const';

/* eslint-enable no-param-reassign */
function lineChart(labels, data, elem) {
  const ctx = elem;
  const chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: colors.textMain,
          borderCapStyle: 'butt',
          borderJoinStyle: 'round',
          pointBorderColor: colors.textMain,
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: colors.textMain,
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data,
          spanGaps: true,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Daily',
        fontSize: 25,
        fontColor: colors.textMain,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Amount Spent / £',
            fontSize: 20,
            fontColor: colors.textMain,
          },
        }],
        xAxes: [{
          type: 'time',
          scaleLabel: {
            display: false,
            labelString: 'Date',
            fontSize: 20,
            fontColor: colors.textMain,
          },
        }],
      },
    },
  });
}

function pieChart(data) {
  const ctx = document.getElementById('pie');
  const myDoughnutChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: data[0],
      datasets: [
        {
          data: data[1],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#77DD77',
            '#B19CD9',
            '#8DEEEE',
            '#FFD1F3',
            '#1abc9c',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#77DD77',
            '#B19CD9',
            '#8DEEEE',
            '#FFD1F3',
            '#1abc9c',
          ],
        }],
    },
    options: {
      title: {
        display: true,
        text: 'Categorised',
        fontSize: 25,
        fontColor: colors.textMain,
      },
      legend: {
        position: 'right',
        labels: {
          fontSize: 18,
          fontColor: colors.textMain,
        },
      },
    },
  });
}

export { pieChart, lineChart };
