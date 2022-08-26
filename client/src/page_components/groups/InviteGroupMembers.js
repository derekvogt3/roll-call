import React from "react";
import { useState, useEffect } from "react";
import { UsersIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { PlusSmIcon } from "@heroicons/react/outline";

export default function InviteGroupMembers({ group, onContinue }) {
  const [people, setPeople] = useState([]);
  const [addedPeople, setAddedPeople] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);

  function handleAdd(id) {
    setAddedPeople((people) => [...people, id]);
    const obj = {
      group_id: group.id,
      user_id: id,
      status: "invited",
    };
    fetch("/user_groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  //   const peopleSearched = people.filter();

  const peopleToInclude = people.map((person, personIdx) => (
    <li
      key={personIdx}
      className="py-4 flex items-center justify-between space-x-3"
    >
      <div className="min-w-0 flex-1 flex items-center space-x-3">
        <div className="flex-shrink-0">
          {person.avatar_url ? (
            <img
              className="h-10 w-10 rounded-full"
              src={person.avatar_url}
              alt=""
            />
          ) : (
            <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900 truncate">
            {person.username}
          </p>
        </div>
      </div>
      <div className="flex-shrink-0">
        {addedPeople.includes(person.id) ? (
          <span className="text-sm font-medium text-gray-900">Added</span>
        ) : (
          <button
            type="button"
            className="inline-flex items-center py-2 px-3 border border-transparent rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => handleAdd(person.id)}
          >
            <PlusSmIcon
              className="-ml-1 mr-0.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-gray-900">Add</span>
          </button>
        )}
      </div>
    </li>
  ));

  return (
    <div className="max-w-lg mx-auto">
      <div>
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <p>{group.name}</p>
          <h2 className="mt-2 text-lg font-medium text-gray-900">
            Add Group Members
          </h2>
        </div>
        <div className="p-2">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => onContinue()}
          >
            Continue
          </button>
        </div>
      </div>
      <div>
        <ul
          role="list"
          className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          {[peopleToInclude]}
        </ul>
      </div>
    </div>
  );
}
