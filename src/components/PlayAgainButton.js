import PropTypes from 'prop-types';
import React from 'react';

const PlayAgainButton = ({ handleResetButton }) => {
  return (
    <div
      className="play-again-button"
      onClick={handleResetButton}
      onKeyPress={handleResetButton}
      role="button"
      tabIndex={0}
    >
      Play Again
    </div>
  );
};

PlayAgainButton.propTypes = {
  handleResetButton: PropTypes.func,
};

export default PlayAgainButton;
