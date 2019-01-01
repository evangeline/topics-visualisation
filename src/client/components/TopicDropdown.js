import React, { Component } from 'react';
import matchSorter from 'match-sorter';

const TopicDropdownItem = ({ topic, history }) => {
  const buttonClicked = e => {
    e.preventDefault();
    history.push(`/product/${topic}`);
  };
  return (
    <button
      type="button"
      className="dropdown-item"
      onClick={buttonClicked}>
      {topic}
    </button>
  );
};

const TopicInput = ({ handleTopicInputChange }) => {
  const inputChanged = e => {
    e.preventDefault();
    handleTopicInputChange(e.target.value);
  };
  return (
    <div className="input-group p-3">
      <input
        type="text"
        className="form-control"
        placeholder="e.g. Advertising"
        aria-label="e.g. Advertising"
        aria-describedby="button"
        onChange={inputChanged}/>
    </div>
  );
};

const TopicDropdownMenu = ({ handleTopicInputChange, filteredTopics, history }) => {
  const TopicDropdownItems = filteredTopics.map(topic => <TopicDropdownItem
    key={`dropdown-${topic.replace(/\s/g, '')}`}
    topic={topic}
    history={history}/>);
  return (
    <div
      className="dropdown-menu pre-scrollable mx-auto"
      aria-labelledby="dropdownMenu">
      <TopicInput
        handleTopicInputChange={handleTopicInputChange}/>
      {TopicDropdownItems}
    </div>
  );
};

class TopicDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productTopics: [],
      filteredTopics: []
    };
    this.handleTopicInputChange = this.handleTopicInputChange.bind(this);
  }

  componentDidMount() {
    this.getTopics();
  };

  getTopics() {
    // polyfill
    fetch('/api/topics', {
      method: 'GET',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Request failed with error: ${res.body}`);
      })
      .then(({ topics }) => {
        this.setState({
          productTopics: topics,
          filteredTopics: topics,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleTopicInputChange(input) {
    const filteredTopics = matchSorter(this.state.productTopics, input);
    this.setState({
      filteredTopics
    });
  }

  render() {
    return (
      <div className="dropdown mx-auto">
        <button
          className="btn btn-dark dropdown-toggle"
          type="button"
          id="dropdownMenu"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          {this.props.topic ? `Product Topic: ${this.props.topic}` : 'Select a Product Topic'}
        </button>
        <TopicDropdownMenu
          handleTopicInputChange={this.handleTopicInputChange}
          filteredTopics={this.state.filteredTopics}
          history={this.props.history}/>
      </div>
    );
  }
}

export default TopicDropdown;
