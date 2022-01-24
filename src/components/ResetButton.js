import PropTypes from 'prop-types';
import React from 'react';

const ResetButton = ({ handleResetButton }) => {
  return (
    <div
      className="reset-button"
      onClick={handleResetButton}
      onKeyPress={handleResetButton}
      role="button"
      tabIndex={0}
    >
      Reset
    </div>
  );
};

ResetButton.propTypes = {
  handleResetButton: PropTypes.func,
};

export default ResetButton;
