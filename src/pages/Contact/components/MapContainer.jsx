import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import images from "src/assets/images";

MapContainer.MAP_LIBRARIES = ["places"];

function MapContainer() {
  const [center, setCenter] = useState({
    lat: 35.955, // 위도
    lng: 128.5656, // 경도
  });

  const containerStyle = {
    width: "120em",
    height: "48em",
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
      libraries={MapContainer.MAP_LIBRARIES}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker
          title={"Daegu, Korea"}
          name={"Daegu, Korea"}
          position={center}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
