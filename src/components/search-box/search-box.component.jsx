import React from 'react';
import PropTypes from 'prop-types';

import './search-box.style.css';

const SearchBox = ({ onSearchChange }) => (
  <input
    className="search-box"
    type="search"
    placeholder="Search Kittens"
    onChange={onSearchChange}
  />
);

SearchBox.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;
