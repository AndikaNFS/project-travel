import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import { MapPinIcon } from "@heroicons/react/24/outline";

const Map = () => {
  const position = [-8.649632813060565, 115.1376962030022]; // Set the initial center coordinates

  return (
    <MapContainer
      center={position}
      zoom={12}
      style={{ height: "400px", width: "100%" }}
      className="rounded-2xl z-0"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={position} />
    </MapContainer>
  );
};

export default Map;
