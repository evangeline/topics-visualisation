import React from 'react';
import { Bubble } from 'react-chartjs-2';

const graphDataset = ({ audienceTopic, audienceSize, combinedSize, productInterest }) => {
  let r;
  if (productInterest <= 10) {
    r = 1;
  } else if (productInterest > 10 && productInterest <= 20) {
    r = 2;
  } else if (productInterest > 20 && productInterest <= 30) {
    r = 3;
  } else if (productInterest > 30 && productInterest <= 40) {
    r = 5;
  } else if (productInterest > 40 && productInterest <= 50) {
    r = 8;
  } else if (productInterest > 50 && productInterest <= 60) {
    r = 13;
  } else if (productInterest > 60 && productInterest <= 70) {
    r = 21;
  } else if (productInterest > 70 && productInterest <= 80) {
    r = 34;
  } else if (productInterest > 80 && productInterest <= 90) {
    r = 55;
  } else {
    r = 89;
  }
  return (
    {
      label: audienceTopic,
      data: [
        {
          x: audienceSize,
          y: combinedSize,
          r: r,
        }
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      productInterest,
    });
};

const tooltip = (tooltipItem, data) => {
  const { label, productInterest } = data.datasets[tooltipItem.datasetIndex];
  const audienceSize = tooltipItem.xLabel;
  const combinedSize = tooltipItem.yLabel;
  return `${label}: Audience Size = ${audienceSize}K, Combined Size = ${combinedSize}K, Product Interest = ${productInterest}%`;
};

const Graph = ({ datasets }) => {
  const data = { datasets: datasets.map(graphDataset) };
  const options = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Combined Product and Audience Size (\'000s)'
        },
        ticks: {
          beginAtZero: true,
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Audience Size (\'000s)'
        },
        ticks: {
          beginAtZero: true,
          suggestedMax: 100
        }
      }],
    },
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy',
    },
    title: {
      display: true,
      text: 'Product Interest (%) given Product and Audience Sizes (\'000s)',
      position: 'top'
    },
    tooltips: {
      callbacks: {
        label: tooltip,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <div style={{ height: '500px' }}>
      <Bubble
        data={data}
        options={options}
      />
    </div>
  );
};

export default Graph;
