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
    console.log(this.state);
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
      .then(({ rows }) => {
        this.setState({
          results: rows,
          isLoading: false,
        });
        console.log(this.state);
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
