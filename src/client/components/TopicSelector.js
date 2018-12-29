import React from 'react';
import { withRouter } from 'react-router-dom';

const TopicInputButton = ({ topic, history }) => (
  <button
    type="button"
    className="btn btn-outline-dark"
    onClick={() => { history.push(`/product/${topic}`); }}
    disabled={!topic}>
    Generate Results
  </button>
);

const TopicInputButtonWithRouter = withRouter(TopicInputButton);

const TopicInputBox = ({handleTopicInputChange, handleTopicInputButtonClick, topic}) => {
  const inputChanged = e => {
    e.preventDefault();
    handleTopicInputChange(e.target.value);
  };
  return (
    <div className="input-group mb-5">
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
          topic={topic}/>
      </div>
    </div>
  );
};

export default TopicInputBox;
