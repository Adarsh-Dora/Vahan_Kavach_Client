import { useState, useEffect } from "react";
import axios from "axios";
import MapComponent from "../components/MapComponent";

function MapPage() {
  const [location, setLocation] = useState({
    latitude: 22.2604,
    longitude: 84.8536,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(
          "https://api.example.com/car-location"
        );
        setLocation({
          latitude: response.data.latitude,
          longitude: response.data.longitude,
        });
      } catch (error) {
        console.error("Error fetching the car location:", error);
      }
    };

    fetchLocation();
    const intervalId = setInterval(fetchLocation, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Car Location Map</h2>
      <MapComponent
        latitude={location.latitude}
        longitude={location.longitude}
      />
    </div>
  );
}

export default MapPage;
