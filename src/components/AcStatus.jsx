// src/components/ACStatus.js

import PropTypes from "prop-types";
import { FaFan } from "react-icons/fa";
import "./Status.css";

const ACStatus = ({ isOn }) => (
  <div className={`status-item ac-status ${isOn ? "on" : "off"}`}>
    <FaFan size={40} />
    <div className="status-text">
      <h3>AC Status</h3>
      <p>{isOn ? "On" : "Off"}</p>
    </div>
  </div>
);

ACStatus.propTypes = {
  isOn: PropTypes.bool.isRequired,
};

export default ACStatus;
