import React, { useState } from "react";
import PictureMap from "./PictureMap";
import UploadPost from "./UploadPost";
import EmptyMap from "./EmptyMap";

import { PlusCircleIcon, CalendarIcon } from "@heroicons/react/outline";

const images = [
  {
    id: 1,
    img: "https://randomwordgenerator.com/img/picture-generator/52e1dd464357a814f1dc8460962e33791c3ad6e04e507440752f78d0974cc2_640.jpg",
    lat: 59.955413,
    lng: 30.337844,
    user: "user1",
    profPic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    img: "https://randomwordgenerator.com/img/picture-generator/hands-423794_640.jpg",
    lat: 60.955413,
    lng: 31.337844,
    user: "user1",
    profPic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    img: "https://randomwordgenerator.com/img/picture-generator/55e4d545425aa514f1dc8460962e33791c3ad6e04e507440742f7cd0944fcd_640.jpg",
    lat: 58.955413,
    lng: 29.337844,
    user: "user1",
    profPic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },

  {
    id: 4,
    img: "https://randomwordgenerator.com/img/picture-generator/54e1dc474856ad14f1dc8460962e33791c3ad6e04e5074417d2d73dc9145c5_640.jpg",
    lat: 40.7052194,
    lng: -74.0138277,
    user: "user1",
    profPic:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function RollCallHome({ rollCall }) {
  const [openPost, setOpenPost] = useState(false);
  console.log(rollCall);

  return (
    <>
      <div className="bg-white shadow overflow-hidden sm:rounded-md flex flex-col mt-4 p-2">
        <div className="flex items-center text-sm text-gray-500">
          <CalendarIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <p>
            <time>{rollCall.created_at}</time>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse justify-items-stretch ">
          {/* couldnt figure out how to render an empty picturemap with all of the clustering and stuff so made an empty map state */}
          {rollCall.roll_call_posts.length === 0 ? (
            <div className="hidden lg:flex">
              <EmptyMap mapWidth={"50vw"} mapHeight={"50vh"} />
            </div>
          ) : (
            <div className="hidden lg:flex">
              <PictureMap
                posts={rollCall.roll_call_posts}
                mapWidth={"50vw"}
                mapHeight={"50vh"}
              />
            </div>
          )}
          {rollCall.roll_call_posts.length === 0 ? (
            <div className="flex lg:hidden">
              <EmptyMap mapWidth={"90vw"} mapHeight={"50vh"} />
            </div>
          ) : (
            <div className="flex lg:hidden">
              <PictureMap
                posts={rollCall.roll_call_posts}
                mapWidth={"90vw"}
                mapHeight={"50vh"}
              />
            </div>
          )}
          <div className="flex flex-col items-start">
            <p className="font-medium text-indigo-600 truncate">
              {rollCall.group.name}
            </p>
            <p>
              You have a roll call due by {rollCall.end_time}, submit a post to
              add a photo to the map!
            </p>

            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setOpenPost(true)}
            >
              <PlusCircleIcon
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Post Roll-Call
            </button>
          </div>
        </div>
      </div>
      <UploadPost
        rollCall={rollCall}
        openPost={openPost}
        setOpenPost={setOpenPost}
      />
    </>
  );
}
