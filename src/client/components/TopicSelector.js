import React from 'react';
import { withRouter } from 'react-router-dom';

const TopicInputButton = ({ handleTopicInputButtonClick, topic, history }) => {
  const buttonClicked = e => {
    e.preventDefault();
    history.push(`/product/${topic.toLowerCase()}`);
    handleTopicInputButtonClick(topic);
  };
  return (
    <button
      type="button"
      className="btn btn-outline-dark"
      onClick={buttonClicked}
      disabled={!topic}>
      <i className="fas fa-pencil-alt"/>
    </button>
  );
};

const TopicInputButtonWithRouter = withRouter(TopicInputButton);

const TopicInputBox = ({ handleTopicInputChange, handleTopicInputButtonClick, topic }) => {
  const inputChanged = e => {
    e.preventDefault();
    handleTopicInputChange(e.target.value);
  };
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Product topic, e.g. Advertising"
        aria-label="Product topic, e.g. Advertising"
        aria-describedby="button"
        value={topic}
        onChange={inputChanged}/>
      <div className="input-group-append">
        <TopicInputButtonWithRouter
          handleTopicInputButtonClick={handleTopicInputButtonClick}
          topic={topic}/>
      </div>
    </div>
  );
};

export default TopicInputBox;
