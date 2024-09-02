// src/components/TireTemperature.js

import PropTypes from "prop-types";
import { FaThermometerHalf } from "react-icons/fa";
import "./Status.css";

const TireTemperature = ({ temperature }) => (
  <div className="status-item tire-temperature">
    <FaThermometerHalf size={40} />
    <div className="status-text">
      <h3>Tire Temperature</h3>
      <p>{temperature} °C</p>
    </div>
  </div>
);

TireTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
};

export default TireTemperature;
