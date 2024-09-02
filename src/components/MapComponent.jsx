// src/MapComponent.js
import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function MapComponent({ latitude = 22.2604, longitude = 84.8536 }) {
  const position = [latitude, longitude];
  const markerRef = useRef(null);

  useEffect(() => {
    if (markerRef.current) {
      // Access the Leaflet marker instance
      const marker = markerRef.current.leafletElement;

      if (marker) {
        // Ensure marker icon has the bounce class
        marker._icon.classList.add('bounce');

        // Remove the bounce class after animation completes
        setTimeout(() => {
          marker._icon.classList.remove('bounce');
        }, 2000); // Match the duration of the bounce animation
      }
    }
  }, [latitude, longitude]);

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker ref={markerRef} position={position}>
        <Popup>Car is here!</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
