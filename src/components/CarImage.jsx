// src/components/CarImage.js

import PropTypes from "prop-types";

const CarImage = ({ imageUrl }) => (
  <div className="car-image">
    <img src={imageUrl} alt="Car" />
  </div>
);

CarImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default CarImage;
