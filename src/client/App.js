import React, { Component } from 'react';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productTopic: ''
    };

    this.handleTopicInputChange = this.handleTopicInputChange.bind(this);
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
          datasets={this.state.datasets}
          topic={this.state.productTopic}
        />
      </div>
    );
  }
}

export default App;
