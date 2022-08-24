import React from "react";
import GoogleMapReact from "google-map-react";
import { fitBounds } from "google-map-react";
import { useState, useEffect, useRef } from "react";
import useSupercluster from "use-supercluster";

import ImageMarker from "./ImageMarker";

export default function PictureMap({ posts, mapWidth, mapHeight }) {
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [dynamicZoom, setDynamicZoom] = useState(10);

  const size = {
    width: window.innerWidth * 0.9, // Map width in pixels
    height: window.innerHeight * 0.3, // Map height in pixels
  };

  function getMinMax(posts) {
    const bounds = {
      ne: {
        lat: Math.max(...posts.map((post) => post.lat)),
        lng: Math.max(...posts.map((post) => post.lng)),
      },
      sw: {
        lat: Math.min(...posts.map((post) => post.lat)),
        lng: Math.min(...posts.map((post) => post.lng)),
      },
    };

    return bounds;
  }

  const points = posts.map((post) => ({
    type: "Feature",
    properties: {
      img: post.photo_url,
      caption: post.comment,
      id: post.id,
    },
    geometry: { type: "Point", coordinates: [post.lng, post.lat] },
  }));

  const defaultBounds = getMinMax(posts);

  const { center, zoom } = fitBounds(defaultBounds, size);

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: dynamicZoom,
    options: { radius: 75, maxZoom: 20 },
  });

  const imageClusterMarkers = clusters.map((cluster) => {
    const [longitude, latitude] = cluster.geometry.coordinates;
    const { cluster: isCluster, point_count: pointCount } = cluster.properties;

    let postObj = {};

    if (isCluster) {
      postObj = {
        key: "cluster-" + cluster.id,
        hasChildren: true,
        children: supercluster.getChildren(cluster.id),
      };
    } else {
      postObj = {
        key: "post-" + cluster.properties.id,
        hasChildren: false,
        properties: cluster.properties,
      };
    }

    return (
      <ImageMarker
        key={postObj.key}
        lat={latitude}
        lng={longitude}
        postObj={postObj}
      ></ImageMarker>
    );
  });

  return (
    // Important! Always set the container height explicitly
    <>
      <div className="flex justify-center p-2">
        <div style={{ height: mapHeight, width: mapWidth }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAP-BjRZ7beYhAFtEW_u_ZDg5OO8xIqTlg",
            }}
            defaultCenter={center}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map }) => {
              mapRef.current = map;
            }}
            onChange={({ zoom, bounds }) => {
              setDynamicZoom(zoom);
              setBounds([
                bounds.nw.lng,
                bounds.se.lat,
                bounds.se.lng,
                bounds.nw.lat,
              ]);
            }}
          >
            {imageClusterMarkers}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
}
