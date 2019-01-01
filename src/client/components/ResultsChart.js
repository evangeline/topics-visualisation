import React from 'react';
import { Bubble } from 'react-chartjs-2';
import * as zoom from 'chartjs-plugin-zoom';

const graphSetup = [
  {
    text: '0-10%',
    r: 1,
    rgb: '103,0,31',
  },
  {
    text: '11-20%',
    r: 2,
    rgb: '178,24,43',
  },
  {
    text: '21-30%',
    r: 3,
    rgb: '214,96,77',
  },
  {
    text: '31-40%',
    r: 5,
    rgb: '244,165,130',
  },
  {
    text: '41-50%',
    r: 8,
    rgb: '253,219,199',
  },
  {
    text: '51-60%',
    r: 13,
    rgb: '209,229,240',
  },
  {
    text: '61-70%',
    r: 21,
    rgb: '146,197,222',
  },
  {
    text: '71-80%',
    r: 34,
    rgb: '67,147,195',
  },
  {
    text: '81-90%',
    r: 55,
    rgb: '33,102,172',
  },
  {
    text: '91-100%',
    r: 89,
    rgb: '5,48,97',
  }
];

const datasetOptions = ({ audienceTopic, audienceSize, combinedSize, productInterest }) => {
  const n = String(Math.ceil(productInterest / 10)).charAt(0);
  if (n === '0') {
    const { r, rgb, text } = graphSetup[n];
    return (
      {
        label: text,
        data: [
          {
            x: audienceSize,
            y: combinedSize,
            r,
          }
        ],
        backgroundColor: `rgb(${rgb},0.2)`,
        borderColor: `rgb(${rgb},1)`,
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(0, 0, 0, 0)',
        hoverBorderWidth: 5,
        productInterest,
        audienceTopic
      });
  }
  const { r, rgb, text } = graphSetup[n - 1];
  return (
    {
      label: text,
      data: [
        {
          x: audienceSize,
          y: combinedSize,
          r,
        }
      ],
      backgroundColor: `rgb(${rgb},0.2)`,
      borderColor: `rgb(${rgb},1)`,
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(0, 0, 0, 0)',
      hoverBorderWidth: 5,
      productInterest,
      audienceTopic
    })
};

const tooltipOptions = (tooltipItem, data) => {
  const { audienceTopic, productInterest } = data.datasets[tooltipItem.datasetIndex];
  const audienceSize = tooltipItem.xLabel;
  const combinedSize = tooltipItem.yLabel;
  return `${audienceTopic}: Audience Size = ${audienceSize}K, Combined Size = ${combinedSize}K, Product Interest = ${productInterest}%`;
};

const generateLabelOptions = ({ text, rgb }) => {
  return (
    {
      text,
      fillStyle: `rgb(${rgb},1)`
    }
  );
};

const Graph = ({ datasets }) => {
  const data = { datasets: datasets.map(datasetOptions) };
  const options = {
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
    legend: {
      labels: {
        generateLabels: chart => graphSetup.map(generateLabelOptions),
      }
    },
    tooltips: {
      callbacks: {
        label: tooltipOptions,
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
