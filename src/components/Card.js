import PropTypes from 'prop-types';
import React from 'react';

const Card = ({ suit, rank, cardStyle }) => {
  return (
    <>
      <div className={`card-container ${cardStyle}`}>
        <div className="rank">{rank}</div>
        <div className="suit-small">
          <img src={`assets/${suit}.svg`} alt={`${suit}-small`} className="img-small" />
        </div>
        <div className="suit-large">
          <img src={`assets/${suit}.svg`} alt={`${suit}-large`} className="img-large" />
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  cardStyle: PropTypes.string.isRequired,
};

export default Card;
