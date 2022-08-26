import React, { useState } from "react";
import PictureMap from "./PictureMap";
import UploadPost from "./UploadPost";
import EmptyMap from "./EmptyMap";

import { PlusCircleIcon, CalendarIcon } from "@heroicons/react/outline";

export default function RollCallHome({ rollCall, groupSummary }) {
  const [openPost, setOpenPost] = useState(false);

  rollCall["group_summary"] = groupSummary;

  var createdAtDate = new Date(rollCall.created_at);
  var date = createdAtDate.getDate();
  var month = createdAtDate.getMonth(); //Be careful! January is 0 not 1
  var year = createdAtDate.getFullYear();

  var dateString = month + 1 + "-" + date + "-" + year;

  var endTimeDate = new Date(rollCall.end_time);
  var date = endTimeDate.getDate();
  var month = endTimeDate.getMonth(); //Be careful! January is 0 not 1
  var year = endTimeDate.getFullYear();

  var enddateString =
    month +
    1 +
    "-" +
    date +
    "-" +
    year +
    " " +
    endTimeDate.getHours() +
    ":" +
    endTimeDate.getMinutes() +
    ":" +
    endTimeDate.getSeconds();

  return (
    <>
      <div className="bg-white shadow overflow-hidden sm:rounded-md flex flex-col mt-4 p-2">
        <div className="flex items-center text-sm text-gray-500">
          <CalendarIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <p>
            <time>{dateString}</time>
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
                rollCall={rollCall}
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
                rollCall={rollCall}
                mapWidth={"90vw"}
                mapHeight={"50vh"}
              />
            </div>
          )}
          <div className="flex flex-col items-start">
            <p className="font-medium text-indigo-600 truncate">
              {groupSummary.name}
            </p>
            <p>
              You have a roll call due by {enddateString}, submit a post to add
              a photo to the map!
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
