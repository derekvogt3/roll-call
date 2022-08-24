import React from "react";
import Member from "./Member";

export default function Members({ group }) {
  return (
    <div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {group.users.map((user) => (
          <Member key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
