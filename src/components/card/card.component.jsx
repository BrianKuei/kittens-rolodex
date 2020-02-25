import React from 'react';
import PropTypes from 'prop-types';

import './card.style.css';

const Card = ({ kitten }) => (
  <div className="card-container">
    <img src={`https://robohash.org/${kitten.id}?set=set4&size=180x180`} alt="kittenImage" />
    <h2>{kitten.name}</h2>
    <p>{kitten.email}</p>
  </div>
);

Card.propTypes = {
  kitten: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Card;
