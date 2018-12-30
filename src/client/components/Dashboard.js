import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Table from './ResultsTable';
import Graph from './ResultsChart';
import TopicInputBox from './TopicSelector';
import TopicDropdown from './TopicDropdown';

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
  <div className="justify-content-center">
    <div className="row text-center h-100">
      <div className="col my-auto">
        <i className="fas fa-circle-notch fa-3x fa-spin text-dark"/>
      </div>
    </div>
  </div>
);

const DashboardNavbar = ({ handleTopicInputButtonClick, productTopics, topic }) => (
  <nav className="navbar d-flex sticky-top navbar-light bg-white shadow-sm">
    <Link className="navbar-brand" to="/">
      <img src="../../public/pencil.png" alt="logo" style={{ maxHeight: '30px' }}/>
    </Link>
    {/*<form className="form-inline mx-auto d-inline w-75">*/}
      {/*<TopicInputBox*/}
        {/*handleTopicInputChange={handleTopicInputChange}*/}
        {/*handleTopicInputButtonClick={handleTopicInputButtonClick}*/}
        {/*topic={topic}/>*/}
    {/*</form>*/}
    <TopicDropdown
      handleTopicInputButtonClick={handleTopicInputButtonClick}
      productTopics={productTopics}
      topic={topic}/>
  </nav>
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
          <div className="card border-0 shadow">
            <div className="card-body">
              <Graph
                datasets={datasets.map(graphDataset)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Spinner />
  );
};

const Dashboard = ({ handleTopicInputButtonClick, datasets, productTopics, topic, isLoading }) => (
  <Router>
    <div className="container-fluid d-flex flex-column bg-light p-0 h-100">
      <DashboardNavbar
        handleTopicInputButtonClick={handleTopicInputButtonClick}
        productTopics={productTopics}
        topic={topic}/>
      <div className="row px-3">
        <div className="col-xl-11 mx-auto mt-5">
          <Results
            datasets={datasets}
            isLoading={isLoading}/>
        </div>
      </div>
    </div>
  </Router>
);

export default Dashboard;
