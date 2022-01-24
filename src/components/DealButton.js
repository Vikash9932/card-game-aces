import PropTypes from 'prop-types';
import React from 'react';

const DealButton = ({ handleDealButton }) => {
  return (
    <div
      className="deal-button"
      onClick={handleDealButton}
      onKeyPress={handleDealButton}
      role="button"
      tabIndex={0}
    >
      Deal
    </div>
  );
};

DealButton.propTypes = {
  handleDealButton: PropTypes.func,
};

export default DealButton;
