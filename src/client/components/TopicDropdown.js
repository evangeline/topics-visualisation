import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const TopicDropdownItem = ({ handleTopicInputButtonClick, topic, history }) => {
  const buttonClicked = e => {
    e.preventDefault();
    history.push(`/product/${topic.toLowerCase()}`);
    handleTopicInputButtonClick(topic);
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

const TopicDropdownItemWithRouter = withRouter(TopicDropdownItem);

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

const TopicDropdownMenu = ({ handleTopicInputChange, handleTopicInputButtonClick, filteredTopics }) => {
  const TopicDropdownItems = filteredTopics.map(topic => <TopicDropdownItemWithRouter
    key={`dropdown-${topic.replace(/\s/g, '')}`}
    topic={topic}
    handleTopicInputButtonClick={handleTopicInputButtonClick}/>);
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
    fetch('http://localhost:8080/api/topics', {
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
    const filteredTopics = this.state.productTopics.filter(topic => topic.search(new RegExp(input, 'i')) > -1);
    this.setState({
      filteredTopics
    });
  }

  // TODO need to stop rerendering all the buttons!
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
          {this.props.topic || 'Select a Product Topic'}
        </button>
        <TopicDropdownMenu
          handleTopicInputChange={this.handleTopicInputChange}
          handleTopicInputButtonClick={this.props.handleTopicInputButtonClick}
          filteredTopics={this.state.filteredTopics}/>
      </div>
    );
  }
}

export default TopicDropdown;
