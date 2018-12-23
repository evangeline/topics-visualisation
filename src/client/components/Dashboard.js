import React from 'react';
import Table from './ResultsTable';
import TopicInputBox from './TopicSelector';

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

const TopicInput = ({handleTopicInputChange, handleTopicInputButtonClick, topic}) => {
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

  return (
    <div className="row text-center">
      <div className="col-lg-4">
        <Table
          results={results}/>
      </div>
      <div className="col-lg-8">
        <div
          className="card border-0 shadow"
          style={{ minHeight: '100%' }}>
          <div className="card-body">
            <h1>Chart here</h1>
          </div>
        </div>
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
      </div>
  }
  return (
    <div
      className="container-fluid justify-content-center bg-light h-100">
      <DashboardHeader />
      <div className="row text-center">
        <div className="col my-auto">
          {dashboardContent}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
