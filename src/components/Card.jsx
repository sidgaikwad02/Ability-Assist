// src/components/Card.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Import the CSS file

export const Card = ({ name, data, imageUrl, buttonText, onButtonClick }) => {
  return (
    <div className="card-container">
      {imageUrl && <img src={imageUrl} alt={name} className="card-image" />}
      <h1 className="card-title">{name}</h1>
      <p className="card-description">{data}</p>
      {buttonText && <button className="card-button" onClick={onButtonClick}>{buttonText}</button>}
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Card;
