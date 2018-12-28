import React from 'react';
import Table from './ResultsTable';
import Graph from './ResultsChart';
import TopicInputBox from './TopicSelector';

const graphDataset = ({ audienceTopic, audienceSize, combinedSize, productInterest }) => (
  {
    label: audienceTopic,
    data: [
      {
        x: audienceSize,
        y: combinedSize,
        r: Math.sqrt(productInterest / Math.PI),
      }
    ],
    backgroundColor: '#ff6384',
  });

const Spinner = () => {
  return (
    <div className="row text-center">
      <div className="col my-auto">
        <i className="fas fa-circle-notch fa-3x fa-spin text-dark" />
      </div>
    </div>
  );
};

const DashboardHeader = () => {
  return (
    <div className="row text-center">
      <div className="col m-5">
        <h1>Pencil Dashboard Demo</h1>
      </div>
    </div>
  );
};

const TopicInput = ({ handleTopicInputChange, handleTopicInputButtonClick, topic }) => {
  return (
    <div className="row text-center">
      <div className="col">
        <TopicInputBox
          handleTopicInputChange={handleTopicInputChange}
          handleTopicInputButtonClick={handleTopicInputButtonClick}
          topic={topic}/>
      </div>
    </div>
  );
};

const Results = ({ results }) => {
  const dataset = results.map(graphDataset);
  return (
    <div className="row">
      <div className="col-lg-4">
        <Table
          results={results}/>
      </div>
      <div className="col-lg-8">
        <Graph
          dataset={dataset}/>
      </div>
    </div>
  );
};

const Dashboard = ({ handleTopicInputChange, handleTopicInputButtonClick, isLoading, results, topic }) => {
  let dashboardContent;
  if (isLoading) {
    dashboardContent = <Spinner />;
  } else {
    dashboardContent =
      <div>
        <TopicInput
          handleTopicInputChange={handleTopicInputChange}
          handleTopicInputButtonClick={handleTopicInputButtonClick}
          topic={topic}/>
        <Results
          results={results}/>
      </div>;
  }
  return (
    <div
      className="container-fluid justify-content-center bg-light h-100">
      <DashboardHeader />
      <div className="row">
        <div className="col my-auto">
          {dashboardContent}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
