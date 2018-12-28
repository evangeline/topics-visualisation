import React, { Component } from 'react';
import Dashboard from './components/Dashboard';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      productTopic: '',
      isLoading: false,
      datasets: []
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
      .then(({ datasets }) => {
        this.setState({
          datasets,
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
          datasets={this.state.datasets}
          topic={this.state.productTopic}
        />
      </div>
    );
  }
}
