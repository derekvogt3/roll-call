import GroupSummary from "../page_components/groups/GroupSummary";
import { Link, Outlet } from "react-router-dom";
import CreateGroupModal from "../page_components/groups/CreateGroupModal";
import { useState, useEffect } from "react";

export default function Groups() {
  const [openCreate, setOpenCreate] = useState(false);
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    fetch("/groups")
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
      });
  }, []);

  function fetchGroups() {
    fetch("/groups")
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
      });
  }

  const groupstoInclude = groups.map((group) => {
    return <GroupSummary key={group.id} group={group} />;
  });

  return (
    <div className="p-2">
      <div className="pb-5 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          My Groups
        </h3>
        <div className="mt-3 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setOpenCreate(true)}
          >
            Create New Group
          </button>
        </div>
      </div>

      {groups.length === 0 ? (
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
          <h2 className="mt-2 text-lg font-medium text-gray-900">
            You do not belong to any groups
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            You do not belong to any groups yet, create a group or accept an
            invitation to see group details
          </p>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {groupstoInclude}
          </ul>
        </div>
      )}

      <Outlet />
      <CreateGroupModal
        fetchGroups={fetchGroups}
        openCreate={openCreate}
        setOpenCreate={setOpenCreate}
      />
    </div>
  );
}
