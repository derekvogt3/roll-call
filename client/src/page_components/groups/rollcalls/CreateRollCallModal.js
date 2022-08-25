import React from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Fragment } from "react";
import { XIcon } from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";
import SelectEndTime from "./SelectEndTime";

export default function CreateRollCallModal({
  group,
  openCreate,
  setOpenCreate,
  setNotify,
  pushNotifications,
  shownPage,
  refresh,
  setRefresh
}) {
  
  const [selected, setSelected] = useState({ id: 1, name: "1 Hour", hours: 1 });

  function handleStart() {
    var start = new Date();
    start.setHours(start.getHours() + selected.hours);
    const obj = {
      end_time: start.toISOString(),
      group_id: group.id,
    };

    fetch("/a_roll_calls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    fetch("/user/groups/posted")
    .then((r) => r.json())
    .then((data) => {
      console.log("FILTERED ROLLCALL: ", data)
      setNotify(data)
      pushNotifications()
      shownPage()
      console.log("FRESH FRESH FRESH:", refresh);
      setRefresh(!refresh)
      console.log("REFRESHED:", refresh);
    })
  }

  return (
    <Transition.Root show={openCreate} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenCreate}>
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
                    onClick={() => setOpenCreate(false)}
                  />
                  <div className="h-40 p-4">
                    <SelectEndTime
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </div>
                  <div className="h-60">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => handleStart()}
                    >
                      Start Roll Call!
                    </button>
                    <p className="p-2">Your group members will be notified</p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
