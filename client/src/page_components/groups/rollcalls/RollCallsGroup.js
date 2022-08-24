import React from "react";
import { useState } from "react";
import CreateRollCallModal from "./CreateRollCallModal";
import { useEffect } from "react";
import RollCallHome from "../../../common/RollCallHome";

export default function RollCallsGroup({ group }) {
  const [openCreate, setOpenCreate] = useState(false);
  const [rollCalls, setRollCalls] = useState([]);

  useEffect(() => {
    fetch("/a_roll_calls")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRollCalls(data);
      });
  }, []);

  const rollCallsToInclude = rollCalls.map((rollCall) => {
    return <RollCallHome key={rollCall.id} rollCall={rollCall} />;
  });

  return (
    <div>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setOpenCreate(true)}
      >
        Start Roll Call
      </button>
      <div className="overflow-auto p-2">{rollCallsToInclude}</div>
      <CreateRollCallModal
        group={group}
        openCreate={openCreate}
        setOpenCreate={setOpenCreate}
      />
    </div>
  );
}
