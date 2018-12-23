import React from 'react';
import Table from './ResultsTable';
import TopicInputBox from './TopicSelector';

const DashboardHeader = () => {
  return (
    <div className="row text-center">
      <div className="col">
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

const Results = () => {
  return (
    <div className="row text-center">
      <div className="col-lg-4">
        <Table />
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

const Dashboard = ({ handleTopicInputChange, handleTopicInputButtonClick, topic }) => {
  return (
    <div
      className="container-fluid justify-content-center bg-light"
      style={{ minHeight: '100%' }}>
      <DashboardHeader />
      <TopicInput
        handleTopicInputChange={handleTopicInputChange}
        handleTopicInputButtonClick={handleTopicInputButtonClick}
        topic={topic}/>
      <Results />
    </div>
  );
};

export default Dashboard;
