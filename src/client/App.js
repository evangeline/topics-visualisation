import React, { Component } from 'react';
import Dashboard from './components/Dashboard';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      productTopic: '',
      isLoading: false,
      results: []
    };

    this.handleTopicInputChange = this.handleTopicInputChange.bind(this);
    this.handleTopicInputButtonClick = this.handleTopicInputButtonClick.bind(this);
  }

  handleTopicInputButtonClick() {
    this.setState({ isLoading: true });
    // polyfill
    fetch(`/api/product/${this.state.productTopic}`, {
      method: 'GET',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Request failed with error: ${res.body}`);
      })
      .then(({ normalisedRows }) => {
        this.setState({
          results: normalisedRows,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleTopicInputChange(topic) {
    this.setState({
      productTopic: topic,
    });
  }

  render() {
    return (
      <div className="h-100">
        <Dashboard
          handleTopicInputChange={this.handleTopicInputChange}
          handleTopicInputButtonClick={this.handleTopicInputButtonClick}
          isLoading={this.state.isLoading}
          results={this.state.results}
          topic={this.state.productTopic}
        />
      </div>
    );
  }
}
