import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

export default function UploadPost({ openPost, setOpenPost }) {
  const [dataUri, setDataUri] = useState("");
  const [pageNav, setPageNav] = useState(1);

  function handleTakePhotoAnimationDone(dataUri) {
    setPageNav(2);
    setDataUri(dataUri);
  }

  const isFullscreen = false;
  useEffect(() => {
    if (dataUri) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        });
      } else {
        console.log("Not Available");
      }
    }
  }, [dataUri]);

  const postPage = function postPage() {
    if (pageNav === 1) {
      return (
        <Camera
          onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
          isFullscreen={isFullscreen}
        />
      );
    } else if (pageNav === 2) {
      return (
        <div className="flex flex-col">
          <img src={dataUri}></img>
          <p>Use this photo</p>
          <button onClick={() => setPageNav(3)}>Continue</button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col">
          <img src={dataUri}></img>
          <p>Use this photo</p>
          <button>Post</button>
        </div>
      );
    }
  };

  return (
    <Transition.Root show={openPost} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenPost}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-0 scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
                <div className="flex flex-col">
                  <XIcon className="h-4 w-4 self-end" />
                  {postPage()}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
