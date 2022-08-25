import React from "react";
import PictureMap from "../common/PictureMap";
import ImageMarker from "../common/ImageMarker";
import Login from "./Login";
import RollCallHome from "../common/RollCallHome";
import { useEffect } from "react";

export default function Home({ user }) {
  useEffect(() => {
    fetch("/a_roll_calls")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="overflow-auto p-2">
      {/* <RollCallHome />
      <RollCallHome />
      <RollCallHome />
      <RollCallHome /> */}
    </div>
  );
}
