import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

export default function ImageMarker({ postObj }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <div
          className="absolute -left-8 -top-24 flex flex-col items-center cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <img
            className="inline-block h-14 w-14 ring-4 ring-white object-cover"
            src={
              postObj.hasChildren
                ? postObj.children[0].properties.img
                : postObj.properties.img
            }
          />
          <div className="bg-white w-14 ring-4 ring-white flex justify-center">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
          <div className="w-6 h-4 overflow-hidden">
            <div className="w-4 h-4 bg-white -rotate-45 transform origin-top-left"></div>
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                    <img
                      className="ring-2 ring-white object-cover"
                      src={
                        postObj.hasChildren
                          ? postObj.children[0].properties.img
                          : postObj.properties.img
                      }
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
