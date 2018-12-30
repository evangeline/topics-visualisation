import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Table from './ResultsTable';
import Graph from './ResultsChart';
import TopicInputBox from './TopicSelector';

const graphDataset = ({ audienceTopic, audienceSize, combinedSize, productInterest }) => (
  {
    label: audienceTopic,
    data: [
      {
        x: productInterest,
        y: audienceSize,
        r: Math.sqrt(combinedSize / Math.PI) / 5,
      }
    ],
    backgroundColor: '#ff6384',
  });

const Spinner = () => (
  <div className="row text-center">
    <div className="col my-auto">
      <i className="fas fa-circle-notch fa-3x fa-spin text-dark"/>
    </div>
  </div>
);

const DashboardHeader = () => (
  <div className="row text-center">
    <div className="col m-5">
      <h1 className="display-4">Pencil Dashboard Demo</h1>
    </div>
  </div>
);

const TopicInput = ({ handleTopicInputChange, handleTopicInputButtonClick, topic }) => (
  <div className="row text-center">
    <div className="col-md-6 mx-auto">
      <TopicInputBox
        handleTopicInputChange={handleTopicInputChange}
        handleTopicInputButtonClick={handleTopicInputButtonClick}
        topic={topic}/>
    </div>
  </div>
);

const Results = ({ datasets, isLoading }) => {
  if (!isLoading) {
    return (
      <div className="row">
        <div className="col-lg-6">
          <Table
            datasets={datasets}/>
        </div>
        <div className="col-lg-6">
          <Graph
            datasets={datasets.map(graphDataset)}/>
        </div>
      </div>
    );
  }
  return (
    <Spinner />
  );
};

const Dashboard = ({ handleTopicInputChange, handleTopicInputButtonClick, datasets, topic, isLoading }) => (
  <Router>
    <div className="container-fluid justify-content-center bg-light h-100">
      <DashboardHeader/>
      <div className="row">
        <div className="col">
          <TopicInput
            handleTopicInputChange={handleTopicInputChange}
            handleTopicInputButtonClick={handleTopicInputButtonClick}
            topic={topic}/>
          <Results
            datasets={datasets}
            isLoading={isLoading}/>
        </div>
      </div>
    </div>
  </Router>
);

export default Dashboard;
