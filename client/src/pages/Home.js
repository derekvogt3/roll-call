import React from "react";
import PictureMap from "../common/PictureMap";
import ImageMarker from "../common/ImageMarker";
import Login from "./Login";
import RollCallHome from "../page_components/home/RollCallHome";

export default function Home() {
  return (
    <div className="overflow-auto p-2">
      <RollCallHome />
      <RollCallHome />
      <RollCallHome />
      <RollCallHome />
    </div>
  );
}
