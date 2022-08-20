import React from "react";
import GoogleMapReact from "google-map-react";
import { fitBounds } from "google-map-react";

import ImageMarker from "./ImageMarker";

const images = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg",
    lat: 59.955413,
    lng: 30.337844,
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg",
    lat: 60.955413,
    lng: 31.337844,
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg",
    lat: 58.955413,
    lng: 29.337844,
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg",
    lat: 70.955413,
    lng: 70.337844,
  },
];

export default function PictureMap() {
  const size = {
    width: window.innerWidth * 0.9, // Map width in pixels
    height: window.innerHeight * 0.9, // Map height in pixels
  };

  function getMinMax(images) {
    const bounds = {
      ne: {
        lat: Math.max(...images.map((image) => image.lat)),
        lng: Math.max(...images.map((image) => image.lng)),
      },
      sw: {
        lat: Math.min(...images.map((image) => image.lat)),
        lng: Math.min(...images.map((image) => image.lng)),
      },
    };

    return bounds;
  }

  console.log(getMinMax(images));

  const bounds = getMinMax(images);

  const { center, zoom } = fitBounds(bounds, size);

  const imageMarkers = images.map((image) => {
    return (
      <ImageMarker
        key={image.lat}
        lat={image.lat}
        lng={image.lng}
        img={image.img}
      />
    );
  });

  return (
    // Important! Always set the container height explicitly
    <>
      <div className="flex justify-center p-2">
        <div style={{ height: "80vh", width: "90vw" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAP-BjRZ7beYhAFtEW_u_ZDg5OO8xIqTlg",
            }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            {imageMarkers}
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
