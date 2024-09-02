// src/components/BatteryStatus.js

// src/components/BatteryStatus.js

import PropTypes from "prop-types";
import { FaBatteryFull } from "react-icons/fa";
import "./Status.css";

const BatteryStatus = ({ level }) => (
  <div className="status-item battery-status">
    <FaBatteryFull size={40} />

    <div className="status-text">
      <h3>Battery Status</h3>
      <p>{level}%</p>
    </div>
  </div>
);

BatteryStatus.propTypes = {
  level: PropTypes.number.isRequired,
};

export default BatteryStatus;
