import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import TopicInputBox from './components/TopicSelector';

const Spinner = props => {
  const { isLoading } = props;
  return (
    <div> { isLoading && <i className="fas fa-circle-notch fa-3x fa-spin text-dark" /> } </div>
  );
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      productTopic: '',
      isLoading: false,
    };

    this.handleTopicInputChange = this.handleTopicInputChange.bind(this);
    this.handleTopicInputButtonClick = this.handleTopicInputButtonClick.bind(this);
  }

  handleTopicInputButtonClick() {
    console.log(this.state.productTopic);
    // this.setState({ isLoading: true });
    // // polyfill
    // fetch('/api/product', {
    //   method: 'GET',
    //   body: { productTopic: topic }
    // })
    //   .then(res => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //     throw new Error(`Request failed with error: ${res.body}`);
    //   })
    //   .then(res => {
    //     console.log(res.body);
    //     this.setState({
    //       productTopic: topic,
    //       isLoading: false,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  handleTopicInputChange(topic) {
    this.setState({
      productTopic: topic,
    });
  }

  render() {
    let app;

    if (this.state.isLoading) {
      app = <Spinner isLoading={this.state.isLoading}/>
    } else {
      app = <Dashboard
        handleTopicInputChange={this.handleTopicInputChange}
        handleTopicInputButtonClick={this.handleTopicInputButtonClick}
        topic={this.state.productTopic}
      />;
    }
    return (
      <div className="h-100">
        {app}
      </div>
    );
  }
}
