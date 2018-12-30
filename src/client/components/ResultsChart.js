import React from 'react';
import { Bubble } from 'react-chartjs-2';

const Graph = ({ datasets }) => {
  const data = { datasets };
  const options = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Audience Size (\'000s)'
        },
        ticks: {
          beginAtZero: true,
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Product Interest (%)'
        },
        ticks: {
          beginAtZero: true,
          suggestedMax: 100
        }
      }]
    },
  };
  return (
    <Bubble
      data={data}
      options={options}
    />
  );
};

export default Graph;
