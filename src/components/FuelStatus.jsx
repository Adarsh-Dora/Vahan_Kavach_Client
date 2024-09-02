// src/components/FuelStatus.js

// src/components/FuelStatus.js

import PropTypes from "prop-types";
import { FaGasPump } from "react-icons/fa";
import "./Status.css";

const FuelStatus = ({ level }) => (
  <div className="status-item fuel-status">
    <FaGasPump size={40} />
    <div className="status-text">
      <h3>Fuel Status</h3>
      <p>{level}%</p>
    </div>
  </div>
);

FuelStatus.propTypes = {
  level: PropTypes.number.isRequired,
};

export default FuelStatus;
