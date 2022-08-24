import React from "react";
import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function GroupSummary({ group }) {
  return (
    <li key={group.id}>
      <Link to={"/groups/" + group.id} className="block hover:bg-gray-50">
        <div className="px-4 py-4 flex items-center sm:px-6">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="truncate">
              <div className="flex text-sm">
                <p className="font-medium text-indigo-600 truncate">
                  {group.name}
                </p>
                <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                  {group.users.length} members
                </p>
              </div>
              <div className="mt-2 flex">
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {group.last_roll_call ? (
                    <p>
                      Last Roll Call{" "}
                      {/* <time dateTime={group.closeDate}>
                      {group.closeDateFull}
                    </time> */}
                    </p>
                  ) : (
                    <p>No Roll Calls Yet</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
              <div className="flex overflow-hidden -space-x-1">
                {group.users.map((user) => {
                  if (user.avatar_url) {
                    return (
                      <img
                        key={user.id}
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                        src={user.avatar_url}
                        alt={user.username}
                      />
                    );
                  } else {
                    return (
                      <span
                        key={user.id}
                        className="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100"
                      >
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="ml-5 flex-shrink-0">
            <ChevronRightIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </li>
  );
}
