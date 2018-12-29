import React, { Component } from 'react';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productTopic: '',
      datasets: [],
    };

    this.handleTopicInputChange = this.handleTopicInputChange.bind(this);
    this.handleTopicInputButtonClick = this.handleTopicInputButtonClick.bind(this);
  }

  handleTopicInputChange(topic) {
    this.setState({
      productTopic: topic,
    });
  }

  handleTopicInputButtonClick(topic) {
    // polyfill
    fetch(`http://localhost:8080/api/product/${topic}`, {
      method: 'GET',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Request failed with error: ${res.body}`);
      })
      .then(({ datasets }) => {
        this.setState({ datasets });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="h-100">
        <Dashboard
          handleTopicInputChange={this.handleTopicInputChange}
          handleTopicInputButtonClick={this.handleTopicInputButtonClick}
          datasets={this.state.datasets}
          topic={this.state.productTopic}
        />
      </div>
    );
  }
}

export default App;
