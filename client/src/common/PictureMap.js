import React from "react";
import GoogleMapReact from "google-map-react";

import ImageMarker from "./ImageMarker";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function PictureMap() {
  const defaultProps = {
    center: {
      lat: 59.955413,
      lng: 30.337844,
    },
    zoom: 10,
  };

  return (
    // Important! Always set the container height explicitly
    <>
      <div className="flex justify-center p-2">
        <div style={{ height: "80vh", width: "90vw" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAP-BjRZ7beYhAFtEW_u_ZDg5OO8xIqTlg",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <ImageMarker lat={59.955413} lng={30.337844} text="My Marker" />
            <ImageMarker lat={60.955413} lng={31.337844} text="My Marker" />
            <ImageMarker lat={58.955413} lng={29.337844} text="My Marker" />
          </GoogleMapReact>
        </div>
      </div>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
      <h1>text</h1>
    </>
  );
}
