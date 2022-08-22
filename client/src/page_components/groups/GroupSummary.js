import React from "react";
import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function GroupSummary({ group }) {
  return (
    <li key={group.id}>
      <Link to="/groups/1" className="block hover:bg-gray-50">
        <div className="px-4 py-4 flex items-center sm:px-6">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="truncate">
              <div className="flex text-sm">
                <p className="font-medium text-indigo-600 truncate">
                  {group.title}
                </p>
                <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                  {group.department}
                </p>
              </div>
              <div className="mt-2 flex">
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <p>
                    Last Roll Call{" "}
                    <time dateTime={group.closeDate}>
                      {group.closeDateFull}
                    </time>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
              <div className="flex overflow-hidden -space-x-1">
                {group.applicants.map((applicant) => (
                  <img
                    key={applicant.email}
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src={applicant.imageUrl}
                    alt={applicant.name}
                  />
                ))}
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
