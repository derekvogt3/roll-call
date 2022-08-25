import React from "react";
import PictureMap from "../common/PictureMap";
import ImageMarker from "../common/ImageMarker";
import Login from "./Login";
import RollCallHome from "../common/RollCallHome";
import { useEffect, useState } from "react";

export default function Home({ user }) {
  const [groupsArray, setGroupsArray] = useState([]);
  useEffect(() => {
    setGroupsArray([]);
    fetch("/groups")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((group) => {
          fetch("/groups/" + group.id)
            .then((res) => res.json())
            .then((data) => setGroupsArray((array) => [...array, data]));
        });
      });
  }, []);

  const postsToInclude = groupsArray.map((group) => {
    return group.a_roll_calls.map((rollCall) => {
      return (
        <RollCallHome
          key={rollCall.id}
          rollCall={rollCall}
          groupSummary={group}
        />
      );
    });
  });

  return <div className="overflow-auto p-2">{postsToInclude}</div>;
}
