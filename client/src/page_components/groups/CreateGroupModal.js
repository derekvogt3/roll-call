import React from "react";
import { useState } from "react";
import { UsersIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";
import { PlusSmIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { XIcon } from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";
import InviteGroupMembers from "./InviteGroupMembers";

export default function CreateGroupModal({
  openCreate,
  setOpenCreate,
  fetchGroups,
}) {
  const [groupName, setGroupName] = useState("");
  const [nav, setNav] = useState(0);
  const [group, setGroup] = useState({});

  function handleCreateGroup() {
    const obj = {
      name: groupName,
    };
    fetch("/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGroup(data);
        setNav(1);
      });
  }

  function onContinue() {
    setOpenCreate(false);
    fetchGroups();
  }

  function postPage() {
    if (nav === 0) {
      return (
        <div className="p-4 flex flex-col">
          <div>
            <label
              htmlFor="name"
              className="ml-px pl-4 block text-sm font-medium text-gray-700"
            >
              Group Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full"
                placeholder="super cool group name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>
          </div>

          <div className="p-2">
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                handleCreateGroup();
              }}
            >
              Create Group
            </button>
          </div>
        </div>
      );
    } else if (nav === 1) {
      return <InviteGroupMembers onContinue={onContinue} group={group} />;
    }
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
