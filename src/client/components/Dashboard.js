import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

const TopicInput = ({ handleTopicInputChange, topic }) => {
  return (
    <div className="row text-center">
      <div className="col">
        <TopicInputBox
          handleTopicInputChange={handleTopicInputChange}
          topic={topic}/>
      </div>
    </div>
  );
};

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasets: []
    };
  }

  componentDidMount() {
    const { topic } = this.props.routeProps.match.params;
    // polyfill
    fetch(`${topic}`, {
      method: 'GET',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Request failed with error: ${res.body}`);
      })
      .then(({ datasets }) => {
        this.setState({
          datasets
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { datasets } = this.state;
    if (datasets.length > 0) {
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
    }
    return (
      <Spinner />
    );
  }
}

const Dashboard = ({ handleTopicInputChange, datasets, topic }) => {
  return (
    <Router>
      <div
        className="container-fluid justify-content-center bg-light h-100">
        <DashboardHeader />
        <div className="row">
          <div className="col my-auto">
            <TopicInput
              handleTopicInputChange={handleTopicInputChange}
              topic={topic}/>
            <Route path="/product/:topic" render={(routeProps) => <Results num="2" routeProps={routeProps} />} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
