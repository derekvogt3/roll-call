import React from "react";
import { useState, useEffect } from "react";
import { UsersIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { PlusSmIcon } from "@heroicons/react/outline";

export default function InviteGroupMembers({ group }) {
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
          <img
            className="h-10 w-10 rounded-full"
            src={person.avatar_url}
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900 truncate">
            {person.username}
          </p>
        </div>
      </div>
      <div className="flex-shrink-0">
        <button
          type="button"
          className="inline-flex items-center py-2 px-3 border border-transparent rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusSmIcon
            className="-ml-1 mr-0.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          {addedPeople.includes(person.id) ? (
            <span className="text-sm font-medium text-gray-900">Added</span>
          ) : (
            <span
              className="text-sm font-medium text-gray-900"
              onClick={() => handleAdd(person.id)}
            >
              Add
            </span>
          )}
        </button>
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
        <div>
          <div className="mt-1 flex rounded-md shadow-sm">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UsersIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                placeholder="John Smith"
              />
            </div>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
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
