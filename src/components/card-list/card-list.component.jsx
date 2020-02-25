import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card.component';

import './card-list.style.css';

const CardList = ({ kittens }) => (
  <div className="card-list">
    {
      kittens.map((kitten) => (
        <Card key={kitten.id} kitten={kitten} />
      ))
    }
  </div>
);

CardList.propTypes = {
  kittens: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
