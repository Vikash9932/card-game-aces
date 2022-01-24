import React from 'react';

const Win = () => {
  return (
    <div className="win">
      <img src="assets/winner.svg" alt="WINNER" className="winner-banner" />
    </div>
  );
};

const Lose = () => {
  return (
    <div className="lose">
      <div>You Lose,</div>
      <div>Better Luck next time!</div>
    </div>
  );
};

export { Win, Lose };
