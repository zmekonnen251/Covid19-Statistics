import React from 'react';
import PropTypes from 'prop-types';

const MatrixCard = (props) => {
  const { name, totalConfirmed, totalDeath } = props;
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h3>{totalConfirmed}</h3>
        <h3>{totalDeath}</h3>
      </div>
    </>
  );
};

MatrixCard.propTypes = {
  name: PropTypes.string.isRequired,
  totalConfirmed: PropTypes.number.isRequired,
  totalDeath: PropTypes.number.isRequired,
};

export default MatrixCard;
