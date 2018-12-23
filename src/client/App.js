import React, { Component } from 'react';
import Dashboard from './components/Dashboard';

const Spinner = props => {
  const { isLoading } = props;
  return <div> {isLoading && <i className="fas fa-circle-notch fa-3x fa-spin text-dark"/>} </div>
};

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}
