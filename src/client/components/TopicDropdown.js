import React, { Component } from 'react';

const TopicDropdownButton = ({ handleTopicInputButtonClick, topic }) => {
  const dropdownKey = `dropdown-${topic}`;
  const buttonClicked = e => {
    e.preventDefault();
    handleTopicInputButtonClick(topic);
  };
  return (
    <button
      type="button"
      className="dropdown-item"
      onClick={buttonClicked}
      key={dropdownKey}>
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

const TopicDropdownMenu = ({ handleTopicInputChange, handleTopicInputButtonClick, filteredTopics }) => {
  const TopicDropdownButtons = filteredTopics.map(topic => <TopicDropdownButton
    topic={topic}
    handleTopicInputButtonClick={handleTopicInputButtonClick}/>);
  return (
    <div
      className="dropdown-menu pre-scrollable mx-auto"
      aria-labelledby="dropdownMenu">
      <TopicInput
        handleTopicInputChange={handleTopicInputChange}/>
      {TopicDropdownButtons}
    </div>
  );
};

class TopicDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredTopics: []
    };
    this.handleTopicInputChange = this.handleTopicInputChange.bind(this);
  }

  handleTopicInputChange(input) {
    const filteredTopics = this.props.productTopics.filter(topic => topic.indexOf(input) > -1);
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
          {this.props.topic || 'Select Product Topic'}
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
