import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

const DisplayCards = ({ cards }) => {
  return (
    <>
      {cards && cards.length === 5 && (
        <div className="cards">
          <Card cardStyle="card1" suit={cards[0][0]} rank={cards[0][1]} />
          <Card cardStyle="card2" suit={cards[1][0]} rank={cards[1][1]} />
          <Card cardStyle="card3" suit={cards[2][0]} rank={cards[2][1]} />
          <Card cardStyle="card4" suit={cards[3][0]} rank={cards[3][1]} />
          <Card cardStyle="card5" suit={cards[4][0]} rank={cards[4][1]} />
        </div>
      )}
      {cards && cards.length === 2 && (
        <div className="cards">
          <Card cardStyle="card11" suit={cards[0][0]} rank={cards[0][1]} />
          <Card cardStyle="card22" suit={cards[1][0]} rank={cards[1][1]} />
        </div>
      )}
    </>
  );
};

DisplayCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.array),
};

export default DisplayCards;
