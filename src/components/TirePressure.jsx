// src/components/TirePressure.js

import PropTypes from "prop-types";
import { FaTachometerAlt } from "react-icons/fa";
import "./Status.css";

const TirePressure = ({ pressure }) => (
  <div className="status-item tire-pressure">
    <FaTachometerAlt size={40} />
    <div className="status-text">
      <h3>Tire Pressure</h3>
      <p>{pressure} PSI</p>
    </div>
  </div>
);

TirePressure.propTypes = {
  pressure: PropTypes.number.isRequired,
};

export default TirePressure;
