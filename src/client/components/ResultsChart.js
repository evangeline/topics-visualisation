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
          labelString: 'Combined Product and Audience Size (\'000s)'
        },
        ticks: {
          beginAtZero: true,
          suggestedMax: 10000
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Audience Size (\'000s)'
        },
        ticks: {
          beginAtZero: true,
          suggestedMax: 10000
        }
      }]
    },
  };
  return (
    <Bubble
      data={data}
      options={options}
    />
)};

export default Graph;
