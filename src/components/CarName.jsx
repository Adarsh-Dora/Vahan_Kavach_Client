// src/components/CarName.js

import PropTypes from "prop-types";

const CarName = ({ name }) => (
  <div className="car-name">
    <h2>{name}</h2>
  </div>
);

CarName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CarName;
