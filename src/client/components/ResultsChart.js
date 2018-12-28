import React from 'react';
import { Bubble } from 'react-chartjs-2';

const Graph = ({ dataset }) => {
  const data = { datasets: dataset };
  const options = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Combined Size'
        },
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Audience Size'
        },
        ticks: {
          beginAtZero: true
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
