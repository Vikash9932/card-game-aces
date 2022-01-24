import PropTypes from 'prop-types';
import React from 'react';

const CardCount = ({ cardsCount, acesCount }) => {
  return (
    <div className="count">
      <div className="card-count">
        <h1 className="number-count">{cardsCount}</h1>
        <h3 className="text-count">Cards Left</h3>
      </div>
      <div className="ace-count">
        <h1 className="number-count">{acesCount}</h1>
        <h3 className="text-count">Ace(s) Left</h3>
      </div>
    </div>
  );
};

CardCount.propTypes = {
  cardsCount: PropTypes.number,
  acesCount: PropTypes.number,
};

export default CardCount;
