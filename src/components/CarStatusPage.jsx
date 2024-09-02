import CarImage from "./CarImage";
import CarName from "./CarName";
import BatteryStatus from "./BatteryStatus";
import FuelStatus from "./FuelStatus";
import TirePressure from "./TirePressure";
import TireTemperature from "./TireTemperature";
import AcStatus from "./AcStatus";
import "./CarStatusPage.css";
import image from "../assets/tesla.png";

const CarStatusPage = () => {
  const carData = {
    imageUrl: image,
    name: "Tesla Model S",
    batteryLevel: 80,
    fuelLevel: 50,
    tirePressure: 32,
    tireTemperature: 30,
    acIsOn: true,
  };

  return (
    <div className="car-status-page">
      <h2>Car Status</h2>
      <CarImage imageUrl={carData.imageUrl} />
      <CarName name={carData.name} />
      <div className="status-container">
        <BatteryStatus level={carData.batteryLevel} />
        <FuelStatus level={carData.fuelLevel} />
        <TirePressure pressure={carData.tirePressure} />
        <TireTemperature temperature={carData.tireTemperature} />
        <AcStatus isOn={carData.acIsOn} />
      </div>
    </div>
  );
};

export default CarStatusPage;
