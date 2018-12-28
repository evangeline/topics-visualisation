import React from 'react';

const TopicInputButton = ({onTopicInputButtonClick, disabled}) => {
  return (
    <button
      type="button"
      className="btn btn-outline-dark"
      onClick={onTopicInputButtonClick}
      disabled={disabled}>
      Generate Results
    </button>
  );
};

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
        <TopicInputButton
          onTopicInputButtonClick={handleTopicInputButtonClick}
          disabled={!topic}/>
      </div>
    </div>
  );
};

export default TopicInputBox;
