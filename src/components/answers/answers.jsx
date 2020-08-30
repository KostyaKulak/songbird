import React from 'react';
import './answers.scss';
import PropTypes from 'prop-types';
import birdsData from '../../data/birds';

const renderItems = (props, arr) => {
  const className = props.page % 2 === 1 ? 'list-group-item default' : 'list-group-item';

  return arr.map((item) => {
    const { id, name } = item;
    return (
      <li
        className={className}
        key={id}
        onClick={(event) => props.onItemSelected(id, event)}
        role="presentation"
      >
        <span className="li-btn" />
        {name}
      </li>
    );
  });
};

const Answers = (props) => {
  const { page } = props;
  const items = renderItems(props, birdsData[page]);
  return (
    <div className="col-md-6">
      <ul className="item-list list-group">{items}</ul>
    </div>
  );
};

export default Answers;

Answers.propTypes = {
  page: PropTypes.number.isRequired,
};
