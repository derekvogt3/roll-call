import React from "react";
import GoogleMapReact from "google-map-react";

export default function EmptyMap({ mapWidth, mapHeight }) {
  const defaultProps = {
    center: {
      lat: 40.73061,
      lng: -73.935242,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: mapHeight, width: mapWidth }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAP-BjRZ7beYhAFtEW_u_ZDg5OO8xIqTlg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}
