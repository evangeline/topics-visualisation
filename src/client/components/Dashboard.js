import React from 'react';
import Table from './ResultsTable';
import Graph from './ResultsChart';
import TopicDropdown from './TopicDropdown';

const Spinner = () => (
  <div className="row text-center w-100 h-100">
    <div className="col my-auto">
      <i className="fas fa-circle-notch fa-3x fa-spin text-dark"/>
    </div>
  </div>
);

const DashboardNavbar = ({ topic, history }) => {
  const navClicked = e => {
    e.preventDefault();
    history.push('/');
  };
  return (
    <nav className="navbar d-flex sticky-top navbar-light bg-white shadow-sm">
      <span
        className="navbar-brand"
        onClick={navClicked}>
        <i className="fas fa-pencil-alt text-dark"/>
      </span>
      <TopicDropdown
        topic={topic}
        history={history}/>
    </nav>
  );
}

const Results = ({ datasets, isLoading }) => {
  if (!isLoading) {
    return (
      <div className="row w-100 m-0">
        <div className="col-xl-11 mx-auto mt-5">
          <div className="row">
            <div className="col-lg-4">
              <Table
                datasets={datasets}/>
            </div>
            <div className="col-lg-8">
              <div className="card my-3 border-0 shadow">
                <div className="card-body">
                  <Graph
                    datasets={datasets}/>
                </div>
              </div>
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

const Dashboard = ({ datasets, topic, isLoading, history }) => (
  <div className="container-fluid d-flex flex-column bg-light p-0 h-100">
    <DashboardNavbar
      topic={topic}
      history={history}/>
    <Results
      datasets={datasets}
      isLoading={isLoading}/>
  </div>
);

export default Dashboard;
