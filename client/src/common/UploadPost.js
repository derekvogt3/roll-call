import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import SimpleMap from "./SimpleMap";

export default function UploadPost({ openPost, setOpenPost }) {
  const [dataUri, setDataUri] = useState("");
  const [pageNav, setPageNav] = useState(1);
  const [showLocationSpinner, setShowLocationSpinner] = useState(true);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  function handleTakePhotoAnimationDone(dataUri) {
    setPageNav(2);
    setDataUri(dataUri);
  }

  const isFullscreen = false;
  useEffect(() => {
    if (dataUri) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          setShowLocationSpinner(false);
        });
      } else {
        console.log("Not Available");
      }
    }
  }, [dataUri]);

  function postPage() {
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
          <p>Use this photo?</p>
          <div>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setPageNav(3)}
            >
              Post
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col">
          <div className="flex">
            <img className="w-1/2" src={dataUri}></img>
            <div className="flex w-1/2 justify-center items-center">
              {showLocationSpinner ? (
                <>
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-8 h-8 text-gray-200 animate-spin fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                  <p>Finding Location</p>
                </>
              ) : (
                <SimpleMap lat={lat} lng={lng} />
              )}
            </div>
          </div>
          <div className="p-2">
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700"
            >
              Add a Caption
            </label>
            <div className="mt-1">
              <textarea
                rows={4}
                name="comment"
                id="comment"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-400 rounded-md"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="flex justify-around">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setPageNav(1)}
            >
              Back
            </button>

            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Post
            </button>
          </div>
        </div>
      );
    }
  }

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
                  <XIcon
                    className="h-6 w-6 text-indigo-600 absolute top-0 right-0"
                    onClick={() => setOpenPost(false)}
                  />
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
