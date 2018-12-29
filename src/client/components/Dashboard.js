import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <h1>Pencil Dashboard Demo</h1>
    </div>
  </div>
);

const TopicInput = ({ handleTopicInputChange, handleTopicInputButtonClick, topic }) => (
  <div className="row text-center">
    <div className="col">
      <TopicInputBox
        handleTopicInputChange={handleTopicInputChange}
        handleTopicInputButtonClick={handleTopicInputButtonClick}
        topic={topic}/>
    </div>
  </div>
);

const Results = ({ datasets }) => {
  if (datasets.length > 0) {
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

const NotFound = () => (
  <h1>Not Found</h1>
);

const Dashboard = ({ handleTopicInputChange, handleTopicInputButtonClick, datasets, topic }) => {
  return (
    <Router>
      <div className="container-fluid justify-content-center bg-light h-100">
        <DashboardHeader />
        <div className="row">
          <div className="col my-auto">
            <TopicInput
              handleTopicInputChange={handleTopicInputChange}
              handleTopicInputButtonClick={handleTopicInputButtonClick}
              topic={topic}/>
            <Switch>
              <Route path="/product/:topic" render={routeProps => <Results datasets={datasets} routeProps={routeProps} />} />
              {/*<Route component={NotFound} />*/}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
