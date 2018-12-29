import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

const Results = ({ datasets }) => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <Table
          datasets={datasets}/>
      </div>
      <div className="col-lg-8">
        <Graph
          datasets={datasets.map(graphDataset)}/>
      </div>
    </div>
  );
};

const Dashboard = ({ handleTopicInputChange, handleTopicInputButtonClick, isLoading, datasets, topic }) => {
  let dashboardContent;
  if (isLoading) {
    dashboardContent = <Spinner />;
  } else {
    dashboardContent =
      <div>
        <Results
          datasets={datasets}/>
      </div>;
  }
  return (
    <div
      className="container-fluid justify-content-center bg-light h-100">
      <DashboardHeader />
      <div className="row">
        <div className="col my-auto">
          <TopicInput
            handleTopicInputChange={handleTopicInputChange}
            handleTopicInputButtonClick={handleTopicInputButtonClick}
            topic={topic}/>
          <Switch>
            <Route path="/product/:topic" component={dashboardContent} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
